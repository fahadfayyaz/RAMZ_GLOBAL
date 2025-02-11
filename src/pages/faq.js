import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, Span } from "../components/Core";

const NavStyled = styled(Nav)`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #f7f7fb;
  padding-top: 15px;
  padding-bottom: 15px;
  a {
    color: ${({ theme }) => theme.colors.dark} !important;
    &:hover,
    &:active,
    &:visited {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
  }
`;

const Databank = [
  {
    label: "general",
    questions: [
      {
        q: "Can I use Omega for my clients?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Do I get free updates?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Will you provide support?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
    ],
  },

  {
    label: "accounts",
    questions: [
      {
        q: "Can I use Omega for my clients?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Do I get free updates?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Will you provide support?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
    ],
  },

  {
    label: "sales",
    questions: [
      {
        q: "Can I use Omega for my clients?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Do I get free updates?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Will you provide support?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
    ],
  },

  {
    label: "support",
    questions: [
      {
        q: "Can I use Omega for my clients?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Do I get free updates?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Will you provide support?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
    ],
  },

  {
    label: "license",
    questions: [
      {
        q: "Can I use Omega for my clients?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Do I get free updates?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
      {
        q: "Will you provide support?",
        a:
          "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
      },
    ],
  },
];

// const Questions = [
//   {

//     topic: "general",
//     questions: [
//       "",
//       "",
//       "",
//     ],
//     answers: [
//       "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
//       "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.",
//       "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.",
//     ],
//   },

//   {
//     topic: "accounts",
//     questions: ["Does it work with WordPress?", "What is your Privacy Policy?"],
//     answers: [],
//   },
// ];

const Faq = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="9">
                <Title variant="hero">Frequently Asked Question</Title>
                <Text>
                  Create custom landing pages with Omega that converts
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="general">
              <Row>
                <Col md="4" className="mb-5 mb-md-0">
                  <NavStyled className="flex-column mr-md-5">
                    <Nav.Link eventKey={Databank[0].label}>General</Nav.Link>
                    <Nav.Link eventKey={Databank[1].label}>Accounts</Nav.Link>
                    <Nav.Link eventKey={Databank[2].label}>Sales</Nav.Link>
                    <Nav.Link eventKey={Databank[3].label}>Support</Nav.Link>
                    <Nav.Link eventKey={Databank[4].label}>License</Nav.Link>
                  </NavStyled>
                </Col>
                <Col md="8">
                  <Tab.Content>
                    <Tab.Pane eventKey={Databank[0].label}>
                      <Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            {Databank[0].questions[0].q}
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding. with Omega that converts
                            more visitors than any website.
                          </Text>
                        </Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            {Databank[0].questions[1].q}
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding.
                          </Text>
                        </Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            {Databank[0].questions[2].q}
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding.
                          </Text>
                        </Box>
                        <Box mb={4}>
                          Didn’t find your answer?{" "}
                          <a href="/">
                            <Span color="primary">Contact us here</Span>
                          </a>
                        </Box>
                      </Box>
                    </Tab.Pane>
                    <Tab.Pane eventKey="accounts">
                      <Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            Does it work with WordPress?
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding. with Omega that converts
                            more visitors than any website.
                          </Text>
                        </Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            What is your Privacy Policy?
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding. with Omega that converts
                            more visitors than any website.
                          </Text>
                        </Box>

                        <Box mb={4}>
                          Didn’t find your answer?{" "}
                          <a href="/">
                            <Span color="primary">Contact us here</Span>
                          </a>
                        </Box>
                      </Box>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sales">
                      <Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            How many sales?
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding. with Omega that converts
                            more visitors than any website.
                          </Text>
                        </Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            What is your Privacy Policy?
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding. with Omega that converts
                            more visitors than any website.
                          </Text>
                        </Box>

                        <Box mb={4}>
                          Didn’t find your answer?{" "}
                          <a href="/">
                            <Span color="primary">Contact us here</Span>
                          </a>
                        </Box>
                      </Box>
                    </Tab.Pane>
                    <Tab.Pane eventKey="support">
                      <Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            How long you support us?
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding. with Omega that converts
                            more visitors than any website.
                          </Text>
                        </Box>

                        <Box mb={4}>
                          Didn’t find your answer?{" "}
                          <a href="/">
                            <Span color="primary">Contact us here</Span>
                          </a>
                        </Box>
                      </Box>
                    </Tab.Pane>
                    <Tab.Pane eventKey="license">
                      <Box>
                        <Box mb={4}>
                          <Title variant="card" mb={3} fontSize="24px">
                            Do you have any MIT licensed version?
                          </Title>
                          <Text variant="small">
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without any
                            design or custom coding. with Omega that converts
                            more visitors than any website.
                          </Text>
                        </Box>

                        <Box mb={4}>
                          Didn’t find your answer?{" "}
                          <a href="/">
                            <Span color="primary">Contact us here</Span>
                          </a>
                        </Box>
                      </Box>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Faq;
