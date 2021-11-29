import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import Layout from "../components/layouts/Article";
import type { NextPage } from "next";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/Bio";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
          mt={2}
        >
          Hello I'm a Full Stack developer based in Mexico
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Andres Aguirre
            </Heading>
            <Text>
              Tech Enthusiast (Software Developer / Soccer Player / Keyboard
              Lover)
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
            Monterrey Mexico with a passion for building digital
            services/software he wants. He has a knack for all things, from
            launching product, designing and planning, all the way to solving
            real-life problems with code. When not online he loves to play
            soccer, softball, bowling, rock climbing, or just hang out with his
            friends. Currently he is working as a Software Consultant for{" "}
            <NextLink passHref href="https://agileengine.com/">
              <Link
                isExternal
                color={useColorModeValue("teal.400", "purple.500")}
              >
                Agile Engine
              </Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading mt={10} as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Monterrey, Mexico 🇲🇽🤠
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Completed High School Degree at Prepa Tec Cumbres in Monterrey,
            Mexico 🏫
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            First Software Engineering Job at{" "}
            <NextLink passHref href="https://www.ecaresoft.com/es-mx">
              <Link
                isExternal
                color={useColorModeValue("teal.400", "purple.500")}
              >
                Ecaresoft
              </Link>
            </NextLink>{" "}
            at the{" "}
            <NextLink passHref href="https://www.nimbo-x.com/">
              <Link
                isExternal
                color={useColorModeValue("teal.400", "purple.500")}
              >
                Nimbo
              </Link>
            </NextLink>{" "}
            team 👨‍⚕️🏥
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            First Free Lance Proyect finished for{" "}
            <NextLink passHref href="http://etiprint.com/">
              <Link
                isExternal
                color={useColorModeValue("teal.400", "purple.500")}
              >
                Etiprint
              </Link>
            </NextLink>{" "}
            🏷️
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Exchange Program (Software Development Masters Classes) at
            FH Joanneum in Kapfenberg, Austria 🇦🇹
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Software Engineering Degree at Tecnologico De Monterrey in
            Monterrey, Mexico 📜🎓
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            First time being a Tech Lead for{" "}
            <NextLink passHref href="https://www.outlandhq.com/">
              <Link
                isExternal
                color={useColorModeValue("teal.400", "purple.500")}
              >
                Outland
              </Link>
            </NextLink>{" "}
            at the project{" "}
            <NextLink passHref href="https://see.ai/">
              <Link
                isExternal
                color={useColorModeValue("teal.400", "purple.500")}
              >
                SeeAi
              </Link>
            </NextLink>{" "}
            👮
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Software Consultant for{" "}
            <NextLink passHref href="https://agileengine.com/">
              <Link
                isExternal
                color={useColorModeValue("teal.400", "purple.500")}
              >
                Agile Engine
              </Link>
            </NextLink>{" "}
            🧡
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading mt={10} as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>
            Software Development, Soccer, Softball, Rock Climbing, Chess,
            Bowling, Beer
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
