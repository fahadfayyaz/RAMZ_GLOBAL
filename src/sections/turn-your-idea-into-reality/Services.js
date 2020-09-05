import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Text, Title } from "../../components/Core";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
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

const Feature = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Section pt="0!important">
        <Container>
          <div className="text-center">
            <Title color="dark" style={{ fontSize: "4em", marginTop: "60px" }}>
              {t("At Ramz Global We Can Help You With")} <br></br>
            </Title>
          </div>
          <Row className="">
            <Col md="6" xl="4" className="mb-5">
              <FeatureCard color="secondary" title={t("Validating Your Idea")}>
                {""}
                Suppose you have an idea of a great web or mobile application.
                In that case, our team of professional developers will help you
                in the validation of your idea to check if it is possible to
                implement it in real-world scenarios. This is the main step for
                making a great application, and it is the most difficult one.
                Our team of experienced developers will take your requirements
                and will purpose a customized solution based on your
                requirements.
              </FeatureCard>
            </Col>
            <Col md="6" xl="4" className="mb-5">
              <FeatureCard color="primary" title="Making It Happen">
                Not only do we help you in validating your idea for a great
                application, but we also make it happen for you. We take care of
                all the application design, programming, database design, and
                any other thing that requires a professional developer's
                services to turn your idea into a real-time working application.
              </FeatureCard>
            </Col>
            <Col md="6" xl="4" className="mb-5">
              <FeatureCard color="warning" title="Support">
                Unlike other agencies, we are not limited to just developing web
                applications. We also provide long-term support and maintenance
                services to our customers. We have a dedicated team to support
                our customers, which makes us best among all the apps and
                software development companies.
              </FeatureCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
  Feature.propTypes = {
    t: PropTypes.func.isRequired,
  };
};
export default Feature;
