import { Flex, Box, Button } from 'rebass/styled-components';
import { Input } from '@rebass/forms';
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useShoppingCart } from 'lib/context/shoppingCartContext';

const InputContainer = styled.div`
  margin-right: 6px;
`;

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { push, pathname } = useRouter();
  const { order } = useShoppingCart();
  console.log('order', order);

  const onSearchClick = () => {
    const query = searchValue ? `?q=${searchValue}` : '';

    push(`/search${query}`, undefined, {
      shallow: pathname === '/search',
    });
  };

  return (
    <Flex
      px={2}
      py={2}
      color="white"
      backgroundColor="white"
      alignItems="center"
      justifyContent="space-between"
    >
      <div></div>
      <Box>
        <Flex>
          <InputContainer>
            <Input
              value={searchValue}
              onChange={({ target: { value } }) => setSearchValue(value)}
              name="search"
              placeholder="search..."
              variant="primary"
            />
          </InputContainer>
          <Button variant="primary" onClick={onSearchClick}>
            Search
          </Button>
        </Flex>
      </Box>
      <Box>
        <Image
          src="/icons/shopping-cart.svg"
          alt="shopping cart"
          width="30"
          height="30"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
