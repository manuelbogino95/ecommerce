import { initializeApollo } from 'lib/apolloClient';
import {
  ALL_PRODUCTS_QUERY,
  GET_PRODUCT_DETAILS,
} from 'lib/queries/productQueries';
import {
  ProductDetails,
  ProductDetailsResponse,
  ProductListResponse,
} from 'lib/types/queries/product';
import type { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const apolloClient = initializeApollo();
  const {
    data: { product },
  } = await apolloClient.query<ProductDetailsResponse>({
    query: GET_PRODUCT_DETAILS,
    variables: {
      slug: params!.slug,
    },
  });

  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`);
  }

  return {
    props: {
      product,
    },
    revalidate: 200,
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const apolloClient = initializeApollo();
  const {
    data: {
      products: { items },
    },
  } = await apolloClient.query<ProductListResponse>({
    query: ALL_PRODUCTS_QUERY,
  });

  return {
    paths: items.slice(0, 4).map(({ slug }) => `/product/${slug}`),
    fallback: 'blocking',
  };
}

type ProductPageProps = {
  product: ProductDetails;
};

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();

  return router.isFallback ? <h1>Loading...</h1> : <p>{product.name}</p>;
}
