import {
  Heading,
  VStack,
  Text,
  ScaleFade,
  SlideFade,
  Box,
  chakra,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

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
      <Layout
        meta={{
          title: "Home",
          description:
            "The Computer Science Club at QSI is a student-run organization filled with students that are passionate about Computer Science. Our goal is to create an inclusive environment where anyone interested in Computer Science can come together and explore the latest technologies or hang out.",
        }}
      >
        <VStack mt="15%" alignItems="flex-start">
          <Box>
            <SlideFade in={true} dir="bottom">
              <Text fontSize="2xl">
                <Badge fontSize="2xl" borderRadius="lg" colorScheme="green">
                  2021
                </Badge>
                -
                <Badge fontSize="2xl" borderRadius="lg" colorScheme="green">
                  2022
                </Badge>{" "}
                SCHOOL YEAR
              </Text>
            </SlideFade>
            <SlideFade in={showAnimation.slogan} dir="bottom">
              <Heading fontSize="7xl" fontWeight="bolder">
                <chakra.span
                  borderBottom="1px black solid"
                  transition="all 10s"
                >
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
          mt="25%"
        >
          <ScaleFade in={true} initialScale={0.5}>
            <chakra.img src="/buildingWebsites.svg" width="500px" />
          </ScaleFade>
          <Box>
            <Heading fontSize="6xl" fontWeight="bolder">
              Who we are.
            </Heading>
            <Text fontSize="xl" overflowWrap="break-word">
              The Computer Science Club at QSI is a student-run organization
              <br />
              filled with students that are passionate about Computer Science.
              <br />
              Our goal is to create an inclusive environment where anyone
              interested
              <br />
              in Computer Science can come together and explore the latest
              <br />
              technologies or hang out.
            </Text>
          </Box>
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
