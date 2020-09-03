import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Text, Title } from "../../components/Core";
import styled, { keyframes } from "styled-components";

const animRippleOut = keyframes`
    100% {
      top: -12px;
      right: -12px;
      bottom: -12px;
      left: -12px;
      opacity: 0;
    }
`;

const InnerCircle = styled(Box)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const OuterCircle = styled(Box)`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: absolute;
  transform: perspective(1px) translateZ(0);
  background-color: ${({ theme, bg }) => rgba(theme.colors[bg], 0.06)};
  &:before {
    content: "";
    position: absolute;
    border: ${({ theme, bg }) => `6px solid ${rgba(theme.colors[bg], 0.08)}`};
    border-radius: 500px;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    animation: ${animRippleOut} 1.2s linear 1s infinite;
  }
`;

const FeatureCard = ({ color = "primary", title, children, ...rest }) => (
  <Box width={"100%"} bg="light" {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
      >
        <InnerCircle bg={color} />
        <OuterCircle bg={color} />
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={500}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const Feature = () => (
  <>
    <Section pt="0!important">
      <Container>
        <div className="text-center">
          <Title color="dark" style={{ fontSize: "4em", marginTop: "60px" }}>
            What Kind Of Mobile Application <br></br> Services Do We Offer?
          </Title>
        </div>
        <Row className="">
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard
              color="secondary"
              title="Android Application Developement"
            >
              We have a team of full-stack android application developers
              dedicated to provide you high-end customized android application
              development services. We can help you to turn your vision, needs,
              and requirements of an app into reality. Get your apps smoothly
              running across multiple android platforms with high efficiency.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="primary" title="IOS APP Development">
              Apple is a well-known brand for mobile devices like iPhones,
              iPads, Apple Watches, etc. They are based on the IOS operating
              system. Therefore, we are offering powerful and reliable Ios
              application development services to make you mobile applications
              running on various apple devices.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="warning" title="Hybrid App Developement">
              Hybrid mobile applications are on the eye of developers and
              businesses around the world. Hybrid apps are known to support
              multiple platforms and can enhance your audience reach across
              multiple platforms. We have a dedicated team to develop
              cross-platform applications that are efficient and run faster on
              multiple platforms.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="success" title="React Native App Development">
              We are specialized in developing react native mobile applications.
              We provide you smooth and easy cross-platform mobile application
              development using cutting-edge technology to ensure that your apps
              run smoothly on both android and Ios platforms.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard
              color="dark"
              title="Custom Mobile Application Development"
            >
              If you are an individual having an amazing idea of a mobile
              application or you are business looking for a mobile application
              with tailor-made requirements to meet your business needs. Our
              customized mobile application development solutions serve various
              industries. We can fulfill all your needs and can develop a
              stunning mobile application for you.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="ash" title="Smart salary">
              Many of us are able to work from home, a café, or a park whenever
              we want. Yay freedom!
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
