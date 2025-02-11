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
                <Title color="light">YOU WANT A PARTNER NOT A DEVELOPER</Title>
              </div>

              <Text mb={4} color="light" textAlign="Center" opacity={0.7}>
                At Ramz global, we build powerful and impressive Ios and android
                applications to solve your everyday business problems. Our apps
                comply with all industry standards. They are built with an
                innovative approach and result-oriented designs to guarantee
                higher conversions, remarkable security, and an incredible
                experience on the user’s end. If you are looking for a mobile
                application for your business or you want to turn your mobile
                application idea into reality, then Ramz Global can make it
                happen for you. Having years of experience in this field and
                working with hundreds of businesses worldwide, we consider
                ourselves highly qualified to handle all your mobile application
                needs. We have a highly skilled and diverse mobile application
                development team that can develop and launch your mobile
                application across different platforms. If you need a
                professional mobile application developer, don’t waste your time
                looking for local agencies. Get in touch with Ramz Global and
                watch your great idea of mobile application turning into
                reality.
              </Text>
            </Col>
          </Row>
          {/* <Row className="justify-content-center">
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <ContentCard>Graphic Design</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <ContentCard>Wordpress Development</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="400"
            >
              <ContentCard>Content Marketing</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="600"
            >
              <ContentCard>Website Development</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="800"
            >
              <ContentCard>Search Engine Optimization</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="1000"
            >
              <ContentCard>Maintenance & Support</ContentCard>
            </Col>
          </Row> */}
        </Container>
      </SectionStyled>
    </>
  );
};

export default Content;
