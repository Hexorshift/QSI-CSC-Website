import {
  Heading,
  VStack,
  Text,
  SlideFade,
  Box,
  chakra,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import BIRDS from "vanta/dist/vanta.birds.min";
// import GLOBE from "vanta/dist/vanta.globe.min";
import Typewriter from "typewriter-effect";

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Vanta = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  /*const [models] = useState([
    GLOBE({
      el: myRef.current,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      color: 0xd12147,
      color2: 0x0,
      backgroundColor: 0xffffff,
      forceAnimate: true,
    }),
  ]);*/

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
  const [socialMedia] = useState([
    {
      name: "Discord Server",
      logo: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-4-1.png",
      url: "https://discord.gg/3aBw4ghwZe",
    },
  ]);

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
        <Flex alignItems="center" height="80vh">
          <Box>
            <SlideFade in={true} dir="bottom">
              <Text fontSize="2xl">2021 - 2022 SCHOOL YEAR</Text>
            </SlideFade>
            <SlideFade in={showAnimation.slogan} dir="bottom">
              <Heading fontSize="7xl" fontWeight="extrabold">
                <Typewriter
                  options={{
                    strings:
                      '<span style="border-bottom: 1px black solid">Build</span><br/> amazing things.',
                    autoStart: true,
                    loop: false,
                    cursor: "_",
                  }}
                />
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
        </Flex>
        <Flex
          mt="7em"
          flexDir="row"
          wrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <chakra.img src="/buildingWebsites.svg" width="500px" />
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Heading
              fontSize="6xl"
              fontWeight="bolder"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
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
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Heading
              fontSize="6xl"
              fontWeight="bolder"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
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
        <Flex
          flexDir="row"
          wrap="wrap-reverse"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "45%", "45%"]}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScVjSf7rGyF_DYVhKInzmC8Rejg9AJuK7f8iWpLko1d8jpzlQ/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </Box>
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Heading
              fontSize="6xl"
              fontWeight="bolder"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              Interested?
            </Heading>
            <Text fontSize="xl" overflowWrap="break-word">
              Fill out this form, and you will become a part of the QSI CS
              community in no time!
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDir="row"
          wrap="wrap-reverse"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "50%", "50%"]}>
            <Heading
              fontSize="6xl"
              fontWeight="bolder"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              Hit us up
            </Heading>
            <Flex>
              {socialMedia.map((socialMedia, index) => {
                return (
                  <Box
                    as={chakra.a}
                    href={socialMedia.url}
                    target="_blank"
                    key={index}
                    cursor="pointer"
                    shadow="lg"
                    p="2"
                    border={`1px solid #EDF2F7`}
                    borderRadius="md"
                  >
                    <Tooltip label={socialMedia.name}>
                      <chakra.img src={socialMedia.logo} width="64px" />
                    </Tooltip>
                  </Box>
                );
              })}
            </Flex>
          </Box>
          <chakra.img src="/socialMedia.svg" width="500px" />
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
