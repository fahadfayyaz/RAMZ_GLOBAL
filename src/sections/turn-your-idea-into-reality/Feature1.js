import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box width={"100%"} bg="light" p="30px" borderRadius={10} {...rest}>
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
    <Section bg="ash">
      <Container>
        <Row className="align-items-center">
          <Col
            md="8"
            lg="6"
            className="offset-lg-1 pl-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Box>
              <Title color="light">What Services Do We Offer? </Title>
              <Text color="light" opacity={0.7}>
                We have a team of full-stack developers that are highly skilled
                and well-experienced.
                <br className="d-none d-sm-block d-md-none d-xl-block" />
                <br className="d-none d-sm-block d-md-none d-xl-block" /> We
                provide the following services to our customers. If you need any
                kind of customized software development or web or android
                application development services, feel free to contact Ramz
                Global. We will not only help you to refine your ideas and
                requirements, but we will also make sure to provide you the best
                and affordable solutions that are according to the market
                standards.
              </Text>
            </Box>
          </Col>
          <Col md="8" lg="5" className="order-lg-1 mt-5 mt-lg-0">
            <div>
              <Row className="justify-content-center">
                <Col
                  md="12"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="primary"
                    iconName="icon-layout-11"
                    title="Android Application Development"
                  ></FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="ash"
                    iconName="icon-sidebar-2"
                    title="Desktop Application Development
"
                  ></FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="dark"
                    iconName="icon-sidebar-2"
                    title="100% Customer Satisfaction"
                  ></FeatureCard>
                </Col>

                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="dark"
                    iconName="icon-sidebar-2"
                    title="AI and Cloud-Based Applications Development"
                  ></FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="dark"
                    iconName="icon-sidebar-2"
                    title="Progressive Web Applications Development"
                  ></FeatureCard>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
