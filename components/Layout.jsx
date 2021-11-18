import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Head from "next/head";
import BIRDS from "vanta/dist/vanta.birds.min";
import { useEffect, useRef, useState } from "react";

const Vanta = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          backgroundColor: 0xffffff,
          forceAnimate: true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} style={{ zIndex: "-1" }}>
      {children}
    </div>
  );
};

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
      <Vanta />
      <Box maxW="1480px" mx="auto" px="3">
        <Navbar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
