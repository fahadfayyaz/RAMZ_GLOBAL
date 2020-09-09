import React from "react";
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPhone from "../../assets/image/png/home1.jpg";
import { flex } from "styled-system";

const SectionStyled = styled(Section)``;

const WidgetContainer = styled(Box)`
  counter-reset: widget-counter;
`;

const WidgetStyled = styled(Box)`
  padding-left: 70px;
  position: relative;
  max-width: 411px;
  // &:before {
  //   counter-increment: widget-counter;
  //   content: counter(widget-counter);
  //   position: absolute;
  //   left: 0;
  //   min-width: 49px;
  //   width: 49px;
  //   height: 49px;
  //   background-color: ${({ theme }) => theme.colors.secondary};
  //   border-radius: 500px;
  //   display: inline-flex;
  //   justify-content: center;
  //   align-items: center;
  //   color: ${({ theme }) => theme.colors.light};
  //   font-size: 24px;
  //   font-weight: 700;
  //   letter-spacing: -0.75px;
  // }
`;
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
      <Title variant="card" mb={2} style={{ margin: "10px 0px" }}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </WidgetStyled>
  );
};

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
                <img src={imgPhone} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
              <div>
                <FeatureCard color="secondary" title="Validating Your Idea">
                  {/* {t("turnYouridea4")} */}
                </FeatureCard>
                <WidgetContainer mt={5}>
                  <Widget title="Sports " mb={4}></Widget>
                  <Widget title="Health and Fitness" mb={4}></Widget>

                  <Widget
                    title="Ecommerce Stores and Applications."
                    mb={4}
                  ></Widget>

                  <Widget title="Educational Solutions" mb={4}></Widget>
                </WidgetContainer>
              </div>
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
                <img src={imgPhone} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" className="order-lg-2">
              <div>
                <WidgetContainer mt={5}>
                  <Widget title="Delivery Apps" mb={4}></Widget>

                  <Widget title="Tracking Apps" mb={4}></Widget>

                  <Widget title="Finance Solutions" mb={4}></Widget>
                  <Widget title="Enterprise Solutions" mb={4}></Widget>
                  <Widget title="And many other industries." mb={4}></Widget>
                </WidgetContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Working;
