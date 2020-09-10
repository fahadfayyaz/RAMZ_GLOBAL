import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPhone from "../../assets/image/png/home1.jpg";
import { flex } from "styled-system";

const FeatureCard = ({ color = "primary", title, children, ...rest }) => (
  <Box width={"100%"} bg="light" {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <Box
        display="flex"
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
      >
        {/* <InnerCircle bg={color} />
        <OuterCircle bg={color} /> */}
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          marginTop={20}
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

const SectionStyled = styled(Section)``;

const WidgetContainer = styled(Box)`
  counter-reset: widget-counter;
`;
const WidgetStyled = styled(Box)`
  position: relative;
`;

const Widget = ({
  color = "primary",
  num = 1,
  title = "",
  children = "",
  ...rest
}) => {
  return (
    <WidgetStyled {...rest} style={{ display: "flex" }}>
      <Box
        size={12}
        minWidth={69}
        minHeight={12}
        borderRadius="50%"
        color={color}
        fontSize="32px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
      ></Box>
      <Title
        variant="card"
        mb={2}
        style={{
          marginLeft: "-80px",
          marginTop: "20px",
        }}
      >
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </WidgetStyled>
  );
};

const Working = () => {
  return (
    <>
      {/* <!-- Content1 section --> */}
      <SectionStyled>
        <Container>
          <Row>
            <Col lg="12" className="mb-4">
              <Title className="text-center" style={{ color: "#D9AB73" }}>
                Industries That We’ve Served{" "}
                {/* <br className="d-none d-sm-block d-md-none d-xl-block" /> all
                 */}
              </Title>
              <Text className="text-center">
                In the past years, we have worked with thousands of businesses
                and helped them with all their software solutions. We have
                severed hundreds of industries and provided them
                highly-efficient solutions for their businesses.
              </Text>
            </Col>
            <Col
              lg="6"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
              className="order-lg-2"
            >
              <div>
                <img src={imgPhone} alt="" className="img-fluid rounded" />
              </div>
            </Col>
            <Col lg="6" className="order-lg-1" className="text-center">
              <FeatureCard color="secondary" title="Sports"></FeatureCard>

              <FeatureCard
                color="secondary"
                title="Health and Fitness"
              ></FeatureCard>
              <FeatureCard
                color="secondary"
                title="Ecommerce Stores and Applications."
              ></FeatureCard>

              <FeatureCard
                color="secondary"
                title="Educational Solutions"
              ></FeatureCard>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
              lg="6"
              className="order-lg-1"
            >
              <div>
                <img src={imgPhone} alt="" className="img-fluid rounded" />
              </div>
            </Col>
            <Col lg="6" className="order-lg-2" style={{ marginTop: "30px" }}>
              <Widget title="Delivery Apps" mb={4}></Widget>

              <Widget title="Tracking Apps" mb={4}></Widget>

              <Widget title="Finance Solutions" mb={4}></Widget>
              <Widget title="Enterprise Solutions" mb={4}></Widget>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Working;
