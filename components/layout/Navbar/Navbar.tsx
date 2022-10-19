import { Flex, Box, Button } from 'rebass/styled-components';
import { Input } from '@rebass/forms';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useShoppingCart } from 'lib/context/shoppingCartContext';
import { InputContainer, ShoppingCart } from './indes.styled';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { push, pathname } = useRouter();
  const { orderQuantity } = useShoppingCart();

  const onSearchClick = () => {
    const query = searchValue ? `?q=${searchValue}` : '';

    push(`/search${query}`, undefined, {
      shallow: pathname === '/search',
    });
  };

  const onCheckoutClick = () => {
    if (!orderQuantity) return;

    push('/checkout');
  };

  return (
    <header>
      <Flex
        px={2}
        py={2}
        backgroundColor="#1F2937"
        alignItems="center"
        justifyContent="space-between"
        height={70}
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
                backgroundColor="white"
              />
            </InputContainer>
            <Button variant="primary" onClick={onSearchClick}>
              Search
            </Button>
          </Flex>
        </Box>
        <ShoppingCart onClick={onCheckoutClick}>
          <Image
            src="/icons/shopping-cart.svg"
            alt="shopping cart"
            width="30"
            height="30"
          />
          <div>{orderQuantity}</div>
        </ShoppingCart>
      </Flex>
    </header>
  );
};

export default Navbar;
