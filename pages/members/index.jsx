import {
  Heading,
  Text,
  SlideFade,
  Box,
  Flex,
  ScaleFade,
  chakra,
  IconButton,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export async function getStaticProps(context) {
  const res = await fetch(
    "https://qsi-cs-bot.abuchowdhury1.repl.co/api/members"
  );
  const data = await res.json();

  return {
    props: { members: data },
    revalidate: 60 * 1,
  };
}

const Members = ({ members }) => {
  const [showAnimation, setShowAnimation] = useState({
    topText: false,
    bottomText: false,
    members: false,
  });
  const [order, setOrder] = useState("Ascending");

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
      <Flex justifyContent="space-between" mb="3">
        <Box>
          <SlideFade in={showAnimation.topText} dir="bottom">
            <Heading fontSize="5xl">Welcome to the QSI CS Club!</Heading>
          </SlideFade>
          <SlideFade in={showAnimation.bottomText} dir="bottom">
            <Text fontSize="2xl">Meet the 2021-2022 members!</Text>
          </SlideFade>
        </Box>
        <VStack alignItems="flex-end">
          <Tooltip
            placement="top-start"
            label={`Sort name by ${
              order === "Ascending" ? "descending" : "ascending"
            } order`}
          >
            <IconButton
              fontSize="2xl"
              onClick={() => {
                order === "Ascending"
                  ? setOrder("Descending")
                  : setOrder("Ascending");
              }}
              icon={
                order === "Ascending" ? <ImSortAlphaDesc /> : <ImSortAlphaAsc />
              }
            />
          </Tooltip>
          <Text fontSize="xl">{members.length} total members</Text>
        </VStack>
      </Flex>
      <Flex
        justifyContent={["center", "center", "flex-start", "flex-start"]}
        wrap="wrap"
        width="100%"
      >
        {members
          .sort((a, b) => {
            if (order === "Ascending") {
              return a.name < b.name ? -1 : 1;
            } else {
              return a.name < b.name ? 1 : -1;
            }
          })
          .map((member, index) => {
            return (
              <ScaleFade key={index} in={showAnimation.members}>
                <Flex
                  border={`1px solid #EDF2F7`}
                  borderRadius="md"
                  flexDir="column"
                  alignItems="flex-start"
                  justifyContent="center"
                  width="280px"
                  shadow="xl"
                  overflow="hidden"
                  mr="3.5em"
                  mb="8"
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
