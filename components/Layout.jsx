import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Head from "next/head";
const Layout = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>{meta.title} - QSI Computer Science Club</title>
        <meta
          name="description"
          content="The Computer Science Club at QSI is a student-run organization filled with students that are passionate about Computer Science. Our goal is to create an inclusive environment where anyone interested in Computer Science can come together and explore the latest technologies or hang out."
        />
        <meta
          name="keywords"
          content="QSI, Queens School of Inquiry, High School Computer Science Club, QSI Computer Science Club"
        />
        <meta name="author" content="QSI Computer Science Club Members" />
      </Head>
      <Box maxW="1480px" mx="auto" my="12" px="3">
        <Navbar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
