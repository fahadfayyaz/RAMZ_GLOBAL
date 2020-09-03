import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const SectionStyled = styled(Section)``;

const FaqCard = ({ title, children, ...rest }) => (
  <Box {...rest}>
    <Title variant="card" mb={4} fontSize="24px" fontWeight="900" color="light">
      {title}
    </Title>
    <Text variant="small" color="lightShade">
      {children}
    </Text>
  </Box>
);

const FAQ = () => (
  <>
    <SectionStyled bg="dark">
      <Container>
        <Row className="justify-content-center">
          <Col xl="7" lg="8" md="9">
            <div className="text-center">
              <Title color="light">
                What kind of Services
                <br className="d-none d-sm-block" /> Can We provide For Your
                Businesses?
              </Title>
              <Text color="lightShade">
                It depends on what kind of results do you want to achieve. We
                have a group of professionals who can help you with the
                following services:
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg="6" className="mt-5">
            <FaqCard title="Validate Your Idea">
              We will help you to kick start the idea of your application
              development. We will do different sessions with you to gather your
              design ideas and perform various tests on your theories. The end
              result would be the initial product design. We will put your
              vision on the top and will make sure that your ideas actually have
              the real business value.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="Innovate and compete">
              Our dedicated team of customized software development will design
              strategic solutions for your business the will fit perfectly with
              your custom software development needs. When it comes to combining
              innovative technologies, we are the industry leaders to develop
              software solutions for rapidly evolving markets.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="Maximize your efficiency">
              We can help you to maximize your business efficiency by creating
              customized software solutions that can make your business
              processes simpler and easier. We will integrate customized
              software solutions with your businesses so that you can save your
              time and focus on other important things without worrying about
              the efficiency of the processes.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="Speed up delivery">
              Our team of dedicated software developers can meet challenging
              deadlines and provide you more efficient and cost-effective
              solutions as compared to in house services. We have years of
              experience and we assure fast and swift delivery to our customers
              with minimum bottlenecks.
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title="Future-proof your web applications">
              All our software solutions are built using agile approaches. It
              means that every software that we develop is future proof and you
              can easily add more functionality to the software in the future
              without effective the previously working modules of the software.
            </FaqCard>
          </Col>

          <Col lg="6" className="mt-5">
            <FaqCard title="Future-proof your web applications">
              All our software solutions are built using agile approaches. It
              means that every software that we develop is future proof and you
              can easily add more functionality to the software in the future
              without effective the previously working modules of the software.
            </FaqCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default FAQ;
