import { ReactNode } from 'react';
import { Box } from 'rebass/styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box p={20} mx="auto" minHeight="100vh">
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
