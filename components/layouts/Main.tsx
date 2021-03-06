import Head from "next/head";
import { Box, Container } from "@chakra-ui/layout";
import { Router } from "next/dist/client/router";
import Navbar from "../Navbar";
import Dog from "../Dog";
import NoSSR from "../No-SSR";

type MainProps = {
  router: Router;
};

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Andres Aguirre - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSSR>
          <Dog />
        </NoSSR>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
