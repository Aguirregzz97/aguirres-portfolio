import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import P from "../../components/Paragraph";
import Layout from "../../components/layouts/Article";
import { Meta, Title, WorkImage } from "../../components/Work";

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        SeeAI <Badge>2020-</Badge>
      </Title>
      <P>
        A Security Application that allows you to automate the security in your
        events or in yout facilities.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.see.ai/" target="_blank">
            https://www.see.ai/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Microsoft Entity Framework .NET</span>
        </ListItem>
      </List>

      <WorkImage src="/img/works/seeAi.png" alt="SeeAI" />
      <WorkImage src="/img/works/seeAi.png" alt="SeeAI" />
    </Container>
  </Layout>
);

export default Work;
