import { Flex, Text, Box, Button } from 'rebass/styled-components';
import { Label, Input } from '@rebass/forms';
import Image from 'next/image';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-right: 6px;
`;

const Navbar = () => {
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
            <Input name="search" placeholder="search..." variant="primary" />
          </InputContainer>
          <Button variant="primary">Search</Button>
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
