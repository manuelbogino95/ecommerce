import { useQuery } from '@apollo/client';
import { SEARCH_PRODUCTS_QUERY } from 'lib/queries/productQueries';
import { filterQuery } from 'lib/search';
import { SearchProductsResponse } from 'lib/types/queries/product';
import { useRouter } from 'next/router';

const useSearch = () => {
  const { query } = useRouter();
  const { q } = query;
  console.log('q', q);

  const { loading, error, data } = useQuery<SearchProductsResponse>(
    SEARCH_PRODUCTS_QUERY,
    {
      variables: {
        input: {
          term: typeof q === 'string' ? q : '',
          groupByProduct: true,
        },
      },
    }
  );

  return {
    loading,
    error,
    data,
  };
};

export default useSearch;
