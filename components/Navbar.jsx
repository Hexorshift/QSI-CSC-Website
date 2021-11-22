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

const Navbar = () => {
  const { onToggle, isOpen } = useDisclosure();
  const [links] = useState([
    {
      name: "Home",
      url: "/",
      external: false,
    },
    {
      name: "Members",
      url: "/members",
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
      <Flex pt="3em" alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <chakra.img src="/logoTransparent.png" width="48px" height="48px" />
          <Link href="/" passHref>
            <Heading as={chakra.a} fontSize="xl" fontWeight="semibold">
              QSI CS Club
            </Heading>
          </Link>
        </HStack>
        <HStack spacing="8" display={["none", "none", "flex", "flex"]}>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.url} passHref>
                <Heading as={chakra.a} fontSize="xl" fontWeight="semibold">
                  {link.name}
                </Heading>
              </Link>
            );
          })}
        </HStack>
        <IconButton
          display={["flex", "flex", "none", "none"]}
          icon={<HamburgerIcon />}
          background="transparent"
          fontSize="2xl"
          onClick={onToggle}
        />
      </Flex>
      <Drawer
        padding="0"
        isOpen={isOpen}
        returnFocusOnClose={false}
        size="full"
        placement="right"
      >
        <DrawerOverlay bgColor="#D12147" />
        <DrawerContent pt="3.28em" px="2">
          <DrawerBody p="0">
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<CloseIcon />}
                background="transparent"
                fontSize="sm"
                onClick={onToggle}
              />
            </Flex>
            <VStack alignItems="flex-start" my="15%">
              {links.map((link, index) => {
                return (
                  <Link key={index} href={link.url} passHref>
                    <Heading as={chakra.a} fontWeight="semibold">
                      {link.name}
                    </Heading>
                  </Link>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
