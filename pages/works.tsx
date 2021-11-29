import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/layout";
import { WorkGridItem } from "../components/GridItem";
import Section from "./../components/Section";
import seeAI from "../public/img/seeAi.png";
import CT from "../public/img/CT.png";
import Layout from "../components/layouts/Article";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="SeeAI" title="SeeAI" thumbnail={seeAI}>
              An Security System that Automates how to handle the Security in an
              event or facilities
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="CT" title="DinCloud" thumbnail={CT}>
              Online Administration System for Grupo Empresarial CT
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="SeeAI" title="SeeAI" thumbnail={seeAI}>
              A Markdown note-taking app with 100+ ecnrypted data sycn support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="SeeAI" title="SeeAI" thumbnail={seeAI}>
              A Markdown note-taking app with 100+ ecnrypted data sycn support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="SeeAI" title="SeeAI" thumbnail={seeAI}>
              A Markdown note-taking app with 100+ ecnrypted data sycn support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="SeeAI" title="SeeAI" thumbnail={seeAI}>
              A Markdown note-taking app with 100+ ecnrypted data sycn support
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
