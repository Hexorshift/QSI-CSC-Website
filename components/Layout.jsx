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
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`QSI Computer Science Club | ${meta.title}`}
        />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content="https://i.ibb.co/FX0BbHX/QSI-CSC.png"
        ></meta>
        <meta
          name="twitter:title"
          content={`QSI Computer Science Club | ${meta.title}`}
        />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/FX0BbHX/QSI-CSC.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
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
