import {
  Heading,
  Text,
  SlideFade,
  Box,
  Flex,
  ScaleFade,
  chakra,
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
    revalidate: 60 * 2,
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
      <Flex justifyContent="center" wrap="wrap" width="100%">
        {members
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((member, index) => {
            return (
              <ScaleFade key={index} in={showAnimation.members}>
                <Flex
                  border={`1px solid #EDF2F7`}
                  borderRadius="md"
                  flexDir="column"
                  alignItems="flex-start"
                  justifyContent="center"
                  m="5"
                  width="280px"
                  shadow="xl"
                  overflow="hidden"
                >
                  <chakra.img
                    src={member.avatar}
                    alt="memberAvatar"
                    width="280px"
                    height="280px"
                  />
                  <Box pt="2" px="3">
                    <Heading fontSize="2xl">{member.name}</Heading>
                    <Text fontSize="xl">{member.year}</Text>
                  </Box>
                </Flex>
              </ScaleFade>
            );
          })}
      </Flex>
    </Layout>
  );
};

export default Members;
