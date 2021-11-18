import {
  Heading,
  VStack,
  Text,
  ScaleFade,
  Fade,
  SlideFade,
  HStack,
  Box,
  chakra,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { HideBetween, HideDuring, HideOn } from "react-hide-on-scroll";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState({
    slogan: false,
    bottomText: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, slogan: true }));
    }, 350);
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, bottomText: true }));
    }, 700);
  }, []);

  return (
    <Layout meta={{ title: "Home" }}>
      <VStack mt="15.5%" alignItems="flex-start">
        <Flex
          dir="row"
          width="100%"
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems="center"
          flexWrap="wrap-reverse"
        >
          <Box>
            <SlideFade in={true} dir="bottom">
              <Text fontSize="2xl">2021-2022 SCHOOL YEAR</Text>
            </SlideFade>
            <SlideFade in={showAnimation.slogan} dir="bottom">
              <Heading fontSize="7xl" fontWeight="bolder">
                Inquire the <br /> unknown.
              </Heading>
            </SlideFade>
            <SlideFade in={showAnimation.bottomText} dir="bottom">
              <Text fontSize="2xl">
                Computer Science Club at Queens School of Inquiry
              </Text>
            </SlideFade>
          </Box>
          <ScaleFade in={true} initialScale={0.5}>
            <chakra.img src="/pairProgramming.svg" width="500px" />
          </ScaleFade>
        </Flex>
      </VStack>
      <HideOn height={200} inverse>
        <Flex
          flexDir="row"
          wrap="wrap"
          alignItems="center"
          justifyContent={["center", "center", "center", "space-between"]}
          mt="13%"
        >
          <ScaleFade in={true} initialScale={0.5}>
            <chakra.img src="/buildingWebsites.svg" width="500px" />
          </ScaleFade>
          <Box>
            <SlideFade in={true} dir="bottom">
              <Heading fontSize="6xl" fontWeight="bolder">
                Who we are.
              </Heading>
            </SlideFade>
            <SlideFade in={true} dir="bottom">
              <Text fontSize="xl">
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
            </SlideFade>
          </Box>
        </Flex>
      </HideOn>
    </Layout>
  );
};

export default Home;