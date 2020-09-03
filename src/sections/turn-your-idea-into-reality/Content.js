import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text, Box, Span } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)``;

const ContentWidget = styled(Box)`
  border-radius: 10px;
  border: 1px solid #2d2d30;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 20px 0;
  padding-left: 28px;
  padding-right: 55px;
  min-width: 100%;
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;

  @media ${device.xl} {
    width: 360px;
    min-width: 360px;
  }
  @media ${device.md} {
    min-height: 89px;
  }

  i {
    font-size: 30px;
    color: #fff;
    position: absolute;
    right: 0;
    margin-right: 30px;
    opacity: 0;
    transition: 0.4s;
  }

  &:hover {
    box-shadow: 0 52px 54px rgba(25, 25, 27, 0.3);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:hover i {
    transform: translateX(10px);
    opacity: 1;
  }
`;

const ContentCard = ({ children = "" }) => {
  return (
    <ContentWidget>
      <div className="d-flex align-items-center">
        <Title color="light" variant="card" mb={0}>
          {children}
        </Title>
      </div>

      <i className="fas fa-chevron-circle-right"></i>
    </ContentWidget>
  );
};

const Content = () => {
  return (
    <>
      {/* <!-- Content section --> */}
      <SectionStyled bg="dark">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="10">
              <div className="text-center">
                <Title color="light">It All Starts With A Great Idea</Title>
              </div>

              <Text mb={4} color="light" textAlign="Center" opacity={0.7}>
                Everything begins with an idea. If you look at all great
                applications and Softwares today that are very successful these
                days, they all started with a very basic idea. Here we have a
                lot of examples like Facebook, Whatsapp, Uber, Careem, etc.
                These are the businesses that are solely created on the base of
                programs and software. The thing is that they implemented their
                ideas well and invested their time and money in developing these
                amazing apps and websites. At Ramz Global, we take your ideas
                and convert them into stunning web-applications and software
                solutions.
                <br className="d-none d-sm-block d-md-none d-xl-block" />
                If you are a business owner and want to simplify your business
                processes, then coming up with an idea of mobile application,
                web application, or desktop application is an easy task, but
                implementing that idea an turning that idea into a real-time
                working application is quite a difficult task. You might be
                looking for a developer to help you turn your vision into
                reality for this purpose. This is what we do at Ramz Global.
              </Text>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Content;
