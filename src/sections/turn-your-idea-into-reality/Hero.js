import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  InputGroup,
} from "../../components/Core";

import { device } from "../../utils";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

import imgL2HeroOval1 from "../../assets/image/png/l2-hero-oval1.png";
import imgL2HeroOval2 from "../../assets/image/png/l2-hero-oval2.png";
import imgL2HeroBg from "../../assets/image/jpeg/process-bg.jpg";

const SectionStyled = styled(Section)`
  background: url(${imgL2HeroBg}) no-repeat;
  background-size: cover;
  background-position: bottom left;

  @media ${device.lg} {
    background-position: center;
  }
`;

const ImageTop = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  top: -11%;
  left: -13%;
  border-radius: 50%;
  overflow: hidden;

  @media ${device.lg} {
    left: 2%;
  }
`;

const ImageBottom = styled(Box)`
  position: absolute;
  right: -13%;
  top: 54%;

  @media ${device.lg} {
    right: -23%;
  }
  @media ${device.xl} {
    right: -28%;
  }
`;

const Hero = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled>
        <div className="pt-5"></div>
        <Container>
          <Row>
            <Col lg="5" className="order-lg-2"></Col>
            <Col
              md="12"
              lg="12"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                <Title style={{ color: "white" }} variant="hero">
                  {t("Turn Your Idea Into Reality")}
                </Title>
                <Text style={{ color: "white" }} mb={4}>
                  {t("turnYouridea3")}
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
  Hero.propTypes = {
    t: PropTypes.func.isRequired,
  };
};
export default Hero;
