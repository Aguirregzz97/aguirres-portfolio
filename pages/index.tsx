import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import type { NextPage } from "next";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello I'm a full stack developer based in Mexico
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andres Aguirre
          </Heading>
          <Text>
            Digital Craftzman (Developer / Soccer Player / Keyboard Enthusiast)
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            maxHeight="100px"
            display="inline-block"
            borderRadius="full"
            src="/img/pp.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Andres Aguirre is freelance and full-stack developer based in
          Monterrey Mexico with a passion for building digital services/software
          he wants. He has a knack for all things, from launching product,
          designing and planning, all the way to solving real-life problems with
          code. When not online he loves to play soccer, softball, bowling, rock
          climbing, or just hang out with his friends. Currently he is working
          as a Software Consultant for{" "}
          <NextLink passHref href="https://agileengine.com/">
            <Link color={useColorModeValue("teal.400", "purple.500")}>
              Agile Engine
            </Link>
          </NextLink>
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Home;
