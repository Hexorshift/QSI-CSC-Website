import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>QSI Computer Science Club | {meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta
          name="keywords"
          content="QSI, Queens School of Inquiry, High School Computer Science Club, QSI Computer Science Club"
        />
        <meta name="author" content="QSI Computer Science Club Members" />
        <meta name="theme-color" content="#D12147" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </Head>
      <Box maxW="1480px" mx="auto" px="3" pb="8">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
