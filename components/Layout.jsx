import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>{meta.title} • QSI Computer Science Club</title>
        <meta name="description" content={meta.description} />
        <meta
          property="og:title"
          content={`${meta.title} • QSI Computer Science Club`}
        />
        <meta property="og:description" content={meta.description} />
        <meta
          name="twitter:title"
          content={` ${meta.title} • QSI Computer Science Club`}
        />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <Box maxW="1366px" mx="auto" px="2">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
