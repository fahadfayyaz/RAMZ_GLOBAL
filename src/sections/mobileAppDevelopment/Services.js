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
          <Row className="">
            <Col md="4" xl="4" className="mb-5">
              <div>
                <Title
                  color="dark"
                  style={{ fontSize: "4em", marginTop: "60px" }}
                >
                  {t("What Kind Of Mobile Application")} <br></br>{" "}
                  {t("Services Do We Offer?")}
                </Title>
              </div>
            </Col>
            <Col md="8" xl="8" className="mb-5">
              <Col
                md="12"
                xl="12"
                className="mb-5"
                style={{ marginTop: "30px" }}
              >
                <FeatureCard
                  color="secondary"
                  title={t("Android Application Developement")}
                >
                  {t("PARA22")}
                </FeatureCard>
              </Col>
              <Col md="12" xl="12" className="mb-5">
                <FeatureCard color="primary" title={t("IOS APP Development")}>
                  {t("PARA23")}
                </FeatureCard>
              </Col>
              <Col md="12" xl="12" className="mb-5">
                <FeatureCard
                  color="warning"
                  title={t("Hybrid App Developement")}
                >
                  {t("PARA24")}
                </FeatureCard>
              </Col>
              <Col md="12" xl="12" className="mb-5">
                <FeatureCard
                  color="success"
                  title={t("React Native App Development")}
                >
                  {t("PARA25")}
                </FeatureCard>
              </Col>
              <Col md="12" xl="12" className="mb-5">
                <FeatureCard
                  color="dark"
                  title={t("Custom Mobile Application Development")}
                >
                  {t("PARA26")}
                </FeatureCard>
              </Col>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

Feature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Feature;
