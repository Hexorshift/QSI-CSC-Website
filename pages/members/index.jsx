import {
  Heading,
  Text,
  SlideFade,
  Box,
  Flex,
  ScaleFade,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export async function getStaticProps(context) {
  const res = await fetch(
    "https://qsi-cs-bot.abuchowdhury1.repl.co/api/members"
  );
  const data = await res.json();

  return {
    props: { members: data },
  };
}

const Members = ({ members }) => {
  const [showAnimation, setShowAnimation] = useState({
    topText: false,
    bottomText: false,
    members: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, topText: true }));
    }, 350);
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, bottomText: true }));
    }, 700);
    setTimeout(() => {
      setShowAnimation((prev) => ({ ...prev, members: true }));
    }, 1050);
  }, []);

  return (
    <Layout
      meta={{
        title: "Members",
        description: "The QSI CS Club members.",
      }}
    >
      <Box textAlign="center">
        <SlideFade in={showAnimation.topText} dir="bottom">
          <Heading fontSize="5xl" textAlign="center">
            Welcome to the QSI CS Club!
          </Heading>
        </SlideFade>
        <SlideFade in={showAnimation.bottomText} dir="bottom">
          <Text fontSize="2xl">Meet the 2021-2022 members!</Text>
        </SlideFade>
      </Box>
      <Flex justifyContent="center" wrap="wrap">
        {members
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((member, index) => {
            return (
              <ScaleFade key={index} in={showAnimation.members}>
                <Flex
                  border={`1px solid #EDF2F7`}
                  borderRadius="md"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  m="3"
                  width="300px"
                  shadow="md"
                  p="3"
                >
                  <Heading fontSize="2xl">{member.name}</Heading>
                  <Text fontSize="xl">{member.year}</Text>
                </Flex>
              </ScaleFade>
            );
          })}
      </Flex>
    </Layout>
  );
};

export default Members;
