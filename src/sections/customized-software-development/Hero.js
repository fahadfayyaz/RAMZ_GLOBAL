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

import imgL2HeroOval1 from "../../assets/image/png/l2-hero-oval1.png";
import imgL2HeroOval2 from "../../assets/image/png/l2-hero-oval2.png";
import imgL2HeroBg from "../../assets/image/jpeg/process-bg.jpg";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

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
            <Col lg="5" className="order-lg-2">
              {/* <div className="position-relative w-100 h-100">
                <ImageTop
                  bg="light"
                  data-aos="zoom-out"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="1000"
                  className="d-none d-lg-block"
                >
                  <img src={imgL2HeroOval1} alt="" className="img-fluid" />
                </ImageTop>
                <ImageBottom
                  data-aos="zoom-out"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="1000"
                  className="d-none d-lg-block"
                >
                  <img src={imgL2HeroOval2} alt="" className="img-fluid" />
                </ImageBottom>
              </div> */}
            </Col>
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
                  {t("Customized Software Development - Ramz Global")}
                </Title>
                <Text style={{ color: "white" }} mb={4}>
                  {t("PARA1")}
                </Text>
                {/* <form action="/">
                  <div className="position-relative">
                    <InputGroup
                      icon={<i className="icon icon-email-84" />}
                      placeholder="Email address"
                      border="none"
                      css={`
                        @media${device.sm} {
                          padding-right: 210px;
                        }
                      `}
                    />
                    <Button
                      css={`
                        margin-top: 1rem;
                        @media${device.sm} {
                          margin-top: 0;
                          position: absolute;
                          top: 50%;
                          right: 5px;
                          transform: translateY(-50%);
                        }
                      `}
                    >
                      Get Started
                    </Button>
                  </div>
                </form> */}
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};
Hero.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Hero;
