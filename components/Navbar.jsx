import {
  Flex,
  Heading,
  IconButton,
  chakra,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";

const Vanta = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          color: 0xd12147,
          color2: 0x0,
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

const Navbar = () => {
  const { onToggle, isOpen } = useDisclosure();
  const [links] = useState([
    {
      name: "Home",
      url: "/",
      external: false,
    },
    {
      name: "Resources",
      url: "/resources",
      external: false,
    },
    {
      name: "Projects",
      url: "/projects",
      external: false,
    },
  ]);

  return (
    <>
      <Flex
        pt="12"
        pb="12"
        dir="row"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack>
          <chakra.img src="/logoTransparent.png" width="64px" />
          <Link href="/" passHref>
            <Heading
              as={chakra.a}
              fontSize="xl"
              fontWeight="thin"
              cursor="pointer"
            >
              The QSI CS Club
            </Heading>
          </Link>
        </HStack>
        <IconButton
          background="transparent"
          onClick={onToggle}
          fontSize="2xl"
          icon={<HamburgerIcon />}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="top"
        size="full"
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Vanta />
          <DrawerBody padding="0" margin="0">
            <Flex
              maxW="1480px"
              mx="auto"
              my="12"
              px="3"
              justifyContent="flex-end"
              alignItems="center"
            >
              <IconButton
                background="transparent"
                onClick={onToggle}
                fontSize="md"
                icon={<CloseIcon />}
              />
            </Flex>
            <Flex
              maxW="1480px"
              mx="auto"
              my="12%"
              px="3"
              justifyContent="flex-start"
              alignItems="center"
            >
              <VStack alignItems="flex-start">
                {links.map((link, index) => {
                  return (
                    <Link key={index} href={link.url} passHref>
                      <Heading as={chakra.a} cursor="pointer">
                        {link.name}
                      </Heading>
                    </Link>
                  );
                })}
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
