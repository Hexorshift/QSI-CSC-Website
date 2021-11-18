import { Heading } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";

const Resources = () => {
  const [showAnimation, setShowAnimation] = useState({
    slogan: false,
    bottomText: false,
    scrollText: false,
  });

  useEffect(() => {}, []);

  return (
    <Layout
      meta={{
        title: "Resources",
        description: "Resources for the QSI Computer Science Club.",
      }}
    >
      <Heading>Resources are coming soon!</Heading>
    </Layout>
  );
};

export default Resources;
