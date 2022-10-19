import ProductList from 'components/features/ProductList';
import useSearch from 'lib/hooks/useSearch';

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
