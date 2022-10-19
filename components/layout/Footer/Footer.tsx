import { Box, Text } from 'rebass/styled-components';

const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: 200,
        mx: 'auto',
        p: 3,
        backgroundColor: '#1F2937',
      }}
    >
      <Text color="white">
        &copy; 2022 Manuel Bogino, Inc. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
