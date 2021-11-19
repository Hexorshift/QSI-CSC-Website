import {
  Heading,
  VStack,
  Text,
  SlideFade,
  Box,
  chakra,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import BIRDS from "vanta/dist/vanta.birds.min";

const Vanta = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    const colors = [0xffffff];
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
    <Box ref={myRef} zIndex="-1">
      {children}
    </Box>
  );
};

const Home = () => {
  const [showAnimation, setShowAnimation] = useState({
    slogan: false,
    bottomText: false,
    scrollText: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, slogan: true }));
    }, 350);
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, bottomText: true }));
    }, 700);
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, scrollText: true }));
    }, 1050);
  }, []);

  return (
    <>
      <Vanta />
      <Layout
        meta={{
          title: "Home",
          description:
            "The Computer Science Club at QSI is a student-run organization filled with students that are passionate about Computer Science. Our goal is to create an inclusive environment where anyone interested in Computer Science can come together and explore the latest technologies or hang out.",
        }}
      >
        <VStack mt={["1em", "5em", "8em", "10em"]} alignItems="flex-start">
          <Box>
            <SlideFade in={true} dir="bottom">
              <Text fontSize="2xl">2021 - 2022 SCHOOL YEAR</Text>
            </SlideFade>
            <SlideFade in={showAnimation.slogan} dir="bottom">
              <Heading fontSize="7xl" fontWeight="bolder">
                <chakra.span borderBottom="1px black solid">
                  Inquire
                </chakra.span>{" "}
                the <br /> unknown.
              </Heading>
            </SlideFade>
            <SlideFade in={showAnimation.bottomText} dir="bottom">
              <Text fontSize="2xl">
                Computer Science Club at Queens School of Inquiry
              </Text>
            </SlideFade>
            <SlideFade in={showAnimation.scrollText} dir="bottom">
              <Text fontSize="xl">Scroll down to learn more</Text>
            </SlideFade>
          </Box>
        </VStack>
        <Flex
          flexDir="row"
          wrap="wrap"
          alignItems="center"
          justifyContent={["center", "center", "center", "space-between"]}
          mt={["15em", "20em", "35em", "25em"]}
        >
          <chakra.img src="/buildingWebsites.svg" width="500px" />
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Heading fontSize="6xl" fontWeight="bolder">
              <chakra.span borderBottom="1px black solid">Who</chakra.span> we
              are.
            </Heading>
            <Text fontSize="xl" overflowWrap="break-word">
              The Computer Science Club at QSI is a student-run organization
              filled with students that are passionate about Computer Science.
              Our goal is to create an inclusive environment where anyone
              interested in Computer Science can come together and explore the
              latest technologies or hang out.
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDir="row"
          wrap="wrap-reverse"
          alignItems="center"
          justifyContent={["center", "center", "center", "space-between"]}
          mt="5em"
        >
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Heading fontSize="6xl" fontWeight="bolder">
              <chakra.span borderBottom="1px solid black">What</chakra.span> we
              do.
            </Heading>
            <Text fontSize="xl" overflowWrap="break-word">
              At the CS Club, we plan on learning front-end development using
              HTML, CSS, JavaScript and React.js. We also plan on learning
              back-end development using Node.js (A JavaScript runtime). We will
              watch movies or play games occasionally! You don't have to be an
              expert to join us.
            </Text>
          </Box>
          <chakra.img src="/technologies.svg" width="500px" />
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
