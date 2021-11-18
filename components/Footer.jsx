import { Box, Text } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box>
      <Text>Built with ❤️ by QSI CS Club</Text>
      <Text>© The QSI CS Club, {new Date().getFullYear()}</Text>
    </Box>
  );
};

export default Layout;
