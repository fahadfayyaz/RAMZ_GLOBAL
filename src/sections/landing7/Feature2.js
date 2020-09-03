import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";
const SectionStyled = styled(Section)``;
import { Title, Section, Box, Text } from "../../components/Core";
import { FaReact } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

// import imgB1 from "../../assets/image/png/testimonial-brand-logo-1.png";
// import imgB2 from "../../assets/image/png/testimonial-brand-logo-2.png";
// import imgB3 from "../../assets/image/png/testimonial-brand-3.png";

// import imgR1 from "../../assets/image/jpeg/l8-testimonial-user-image-1.jpg";
// import imgR2 from "../../assets/image/jpeg/l8-testimonial-user-image-2.jpg";
// import imgR3 from "../../assets/image/jpeg/l8-testimonial-user-image-3.jpg";
const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  icon,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex align-items-center ${className}`}
    {...rest}
    css={`
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow};`};
      }
    `}
  >
    <Box
      size={55}
      minWidth={55}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
      mr={3}
    >
      {icon || <i className={`icon ${iconName}`}></i>}
    </Box>

    <Title variant="card" mb={0}>
      {title}
    </Title>
  </Box>
);

const Feature2 = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>Our Services</Title>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Android Application Developement"
              color="primary"
              iconName="icon-android"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="IOS APP Development"
              color="ash"
              iconName="icon-app"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Hybrid App Developement"
              color="warning"
              iconName="icon-sidebar-2"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="React Native App Development"
              icon={<FaReact color="blue" size="2rem" />}
              color="ash"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Custom Mobile Application Development"
              color="primary"
              icon={<FaMobileAlt size="2rem" />}
            />
          </Col>
        </Row>
        {/* <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Rich Documentation"
              color="ash"
              iconName="icon-bookmark-2-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Humanly Support"
              color="success"
              iconName="icon-voice-recognition-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Lifetime Updates"
              color="primary"
              iconName="icon-infinite"
            />
          </Col>
        </Row> */}
      </Container>
    </Section>
  </>
);

export default Feature2;
