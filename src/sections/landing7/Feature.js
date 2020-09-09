import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";

const ShapeTopRight = styled(Box)`
  position: absolute;
  top: 0;
  right: 0px;
`;

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  img {
    min-width: 100%;
  }
`;

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  Button,
  ...rest
}) => (
  <Box bg="light" py="25px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Text
        color="heading"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section bg="secondary" className="position-relative">
      <ShapeTopRight
        data-aos="fade-left"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <img src={imgL1FeatureOval} alt="" className="img-fluid" />
      </ShapeTopRight>
      <ShapeBottmRight>
        <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
      </ShapeBottmRight>
      <Container>
        <Row className="align-items-center">
          <Col lg="12" className="pl-lg-5 order-lg-1 text-center">
            <div className="feature-content section-title">
              <Title color="light">What Do We Offer?</Title>
              <Text color="light" opacity={0.7} mb={4}>
                We provide you with the right kind of software solutions that
                are required to take your business to the next level. We use all
                the latest technologies and methods required to cope with the
                market and provide you a competitive edge over others. We
                understand the needs of customers and provide them the following
                services according to their requirements.
              </Text>
            </div>
          </Col>
          <Col lg="12" className="order-lg-2 mt-5 mt-lg-0">
            <Row>
              <Col md="6">
                <FeatureCard
                  color="primary"
                  iconName="icon-layout-11"
                  title="Mobile Application Developement"
                >
                  With lots of unique blocks, you can easily build a page
                  without coding.
                  <br />
                  <Box
                    style={{ marginTop: "30px" }}
                    className="justify-content-center"
                  >
                    <Button className="text-center" mt={4}>
                      Learn more
                    </Button>
                  </Box>
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="warning"
                  iconName="icon-sidebar-2"
                  title="Progressive Web Applications"
                >
                  We build highly efficient progressive web applications that
                  could be an all in one solution for your business needs.
                  <br />
                  <Box className="justify-content-center">
                    <Button className="text-center" mt={4}>
                      Learn more
                    </Button>
                  </Box>
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="secondary"
                  iconName="icon-bookmark-2-2"
                  title="Customized Software Development"
                >
                  We build tailor-made software applications to meet all your
                  personal and business needs.
                  <br />
                  <Box className="justify-content-center">
                    <Button className="text-center" mt={4}>
                      Learn more
                    </Button>
                  </Box>
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="ash"
                  iconName="icon-chat-45-2"
                  title="Turn Your Idea Into Reality"
                >
                  We develop real-world software solutions based on your
                  hypothetical ideas.
                  <br />
                  <Box className="justify-content-center">
                    <Button className="text-center" mt={4}>
                      Learn more
                    </Button>
                  </Box>
                </FeatureCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
