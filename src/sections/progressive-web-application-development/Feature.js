import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
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

const Feature = () => {
  const { t } = useTranslation(["common"]);
  return (
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
            <Col lg="6" className="pl-lg-5 order-lg-2">
              <div className="feature-content section-title">
                <Title color="light">
                  {t(
                    "Why Choose Ramz Global For Progressive Web Applications Development?"
                  )}
                </Title>
                <Text color="light" opacity={0.7} mb={4}>
                  {t("progressive1")}
                </Text>
              </div>
            </Col>
            <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
              <Row>
                <Col md="12">
                  <FeatureCard
                    color="primary"
                    iconName="icon-layout-11"
                    title={t("Experienced Team")}
                  >
                    {t("progressive2")}
                  </FeatureCard>
                </Col>
                <Col md="12">
                  <FeatureCard
                    color="warning"
                    iconName="icon-sidebar-2"
                    title={t("Use of Cutting-Edge Technologies")}
                  >
                    {t("progressive3")}
                  </FeatureCard>
                </Col>
                <Col md="12">
                  <FeatureCard
                    color="secondary"
                    iconName="icon-bookmark-2-2"
                    title={t("Flexible Models")}
                  >
                    {t("progressive4")}
                  </FeatureCard>
                </Col>
                <Col md="12">
                  <FeatureCard
                    color="ash"
                    iconName="icon-chat-45-2"
                    title={t("Competitive Solution")}
                  >
                    {t("progressive5")}
                  </FeatureCard>
                </Col>
              </Row>
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
