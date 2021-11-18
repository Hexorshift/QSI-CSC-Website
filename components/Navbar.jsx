import {
  Flex,
  Heading,
  IconButton,
  HStack,
  chakra,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { onToggle, isOpen } = useDisclosure();

  return (
    <>
      <Flex
        dir="row"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Heading fontSize="xl" fontWeight="thin" cursor="pointer">
            <chakra.a>The QSI CS Club</chakra.a>
          </Heading>
        </Link>
        <IconButton
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
                onClick={onToggle}
                fontSize="md"
                icon={<CloseIcon />}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
