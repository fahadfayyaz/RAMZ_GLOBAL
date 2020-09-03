import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import { device } from "../../utils";
import imgAuthor from "../../assets/image/jpeg/author1.jpg";

const SectionStyled = styled(Section)``;

const Author = styled(Box)`
  min-width: 271px;
  max-width: 271px;
  min-height: 271px;
  max-height: 271px;
  border-radius: 500px;
  overflow: hidden;
  margin-bottom: 30px;
  @media ${device.lg} {
    margin-bottom: 0;
  }
`;

const OurValues = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="#f6f6f8">
      <Container>
        <Row>
          <Col xs="12" className="mb-5">
            <div className="text-center">
              <Title>Our Values</Title>
            </div>
          </Col>
          <Col
            lg="4"
            md={{ span: 3, offset: 3 }}
            sm={{ span: 3, offset: 3 }}
            className="offset-lg-1 mb-4 offset-mb-1 mb-lg-0"
          >
            <Author>
              <img src={imgAuthor} alt="Author" />
            </Author>
          </Col>
          <Col lg="7" className="pr-lg-5">
            <div className="author-text">
              <Text variant="small" my={4}>
                We believe that every business is different and has its
                individual needs; therefore, we work separately with every
                client. We understand every client’s needs and requirements and
                then suggest to them the best solution for their business. We
                value trust and honesty; therefore we never overcharge our
                customers.
              </Text>
              <Text variant="small">
                We believe that a happy customer means more business;
                consequently, we always go the extra mile to get our customers’
                satisfaction. So, if you are looking for any kind of customized
                software development, mobile application development, or any
                kind solution designed and developed for your business, feel
                free to contact Ramz Global. Our experts are 24/7 available for
                your service. We will ensure that you get the right solution for
                your business at an affordable budget and with desired
                requirements.
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default OurValues;
