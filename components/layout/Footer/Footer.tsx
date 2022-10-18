import { Box, Text } from 'rebass/styled-components';

const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: 200,
        mx: 'auto',
        p: 3,
        backgroundColor: 'black',
      }}
    >
      <Text color="white">
        &copy; 2022 Manuel Bogino, Inc. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
