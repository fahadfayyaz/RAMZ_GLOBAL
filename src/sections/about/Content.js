import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Title variant="hero">What do We do?</Title>

          <Col lg="12" className="pl-lg-12">
            <Text>
              Being a name of trust and reliability, we have an impressive
              portfolio in customized software development, and mobile and web
              application design and development. Either it is your enterprise
              applications, Customer relationship management software, or any
              other software for your business, we can provide you the best and
              top-notch development services at the most affordable costs. We
              are a full-service development agency that brings together the
              most experienced team of app designers, product managers, software
              architects, software programmers, and engineers.
            </Text>
            <Text style={{ paddingTop: "10px" }}>
              Our software developers have years of experience working with some
              of the most successful businesses and companies all across the
              globe. If you want to transform your business and take it to the
              next level, we can have solutions for you. All our solutions are
              tailor-made according to your needs and requirements. It means
              that if you have something in your mind, we can help you to refine
              it and turn it into reality. We understand the market’s changing
              trends; therefore, we use all the latest cutting-edge technologies
              to develop your solutions. Our solutions are fast and reliable so
              that you can run your business smoothly and increase its
              efficiency. We have a huge list of satisfied clients and, you can
              also be one of them.
            </Text>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
