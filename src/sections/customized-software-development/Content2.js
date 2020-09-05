import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContentBig from "../../assets/image/jpeg/l2-content3-big.jpg";
import imgOval from "../../assets/image/png/l2-content3-oval.png";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

const ImageBottom = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  top: 52%;
  left: -3%;
  z-index: 2;
  border-radius: 500px;
  overflow: hidden;
  max-width: 50%;

  @media ${device.md} {
    max-width: 100%;
  }
  @media ${device.lg} {
    left: 6%;
  }
  @media ${device.xl} {
    left: 8%;
  }
`;

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`;

const Content2 = () => { 
  const { t } = useTranslation(["common"]);
return (
  <>
    {/* <!-- Content section 1 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="10" className="order-lg-2 mb-4">
            <div className="position-relative text-lg-right">
              <ImageRight
                className=""
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgContentBig} alt="" className="img-fluid" />
              </ImageRight>
              <ImageBottom
                bg="light"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img src={imgOval} alt="" className="img-fluid" />
              </ImageBottom>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div>
                <Title>{T("Save tons of time on design & coding.")}</Title>
                <Text mb={4}>
                 {t("PARA3")}
                </Text>

                <Button mt={3}>{t("Get Started")}</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);
};

Content2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Content2;
