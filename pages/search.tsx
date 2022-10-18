import { useQuery } from '@apollo/client';
import ProductList from 'components/features/ProductList';
import useSearch from 'lib/hooks/useSearch';
import { SEARCH_PRODUCTS_QUERY } from 'lib/queries/productQueries';
import { SearchProductsResponse } from 'lib/types/queries/product';

const SearchPage = () => {
  const { loading, data } = useSearch();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.search.items ? (
        <ProductList products={data?.search.items} />
      ) : null}
    </div>
  );
};

export default SearchPage;
