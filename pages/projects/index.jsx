import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const Projects = () => {
  const [showAnimation, setShowAnimation] = useState({
    slogan: false,
    bottomText: false,
    scrollText: false,
  });

  useEffect(() => {}, []);

  return (
    <Layout
      meta={{
        title: "Projects",
        description:
          "Check out the projects we built at the QSI Computer Science Club!",
      }}
    >
      <Heading>Projects are coming soon!</Heading>
    </Layout>
  );
};

export default Projects;
