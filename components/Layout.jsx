import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
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
      </Head>
      <Box maxW="1480px" mx="auto" my="12" px="3">
        <Navbar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
