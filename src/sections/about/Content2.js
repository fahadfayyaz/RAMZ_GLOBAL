import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Badge } from "../../components/Core";

import imgShape from "../../assets/image/png/content1-img-small.png";
import imgContent from "../../assets/image/jpeg/content1-img1.jpg";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

const SectionStyled = styled(Section)`
  border-top: 1px solid #242427;
`;

const ShapeBox = styled(Box)`
  position: absolute;
  top: -70px;
  left: -20px;
  z-index: 2;
`;

const Content2 = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <SectionStyled bg="dark">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="6" className="my-5 my-lg-0">
              <div className="">
                <Box
                  className=" "
                  data-aos="zoom-out"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  <img src={imgContent} alt="" className="img-fluid" />
                </Box>
                <ShapeBox
                  className=""
                  data-aos="zoom-out"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  <img
                    src={imgShape}
                    alt=""
                    className="img-fluid"
                    css={`
                      opacity: 0.5;
                    `}
                  />
                </ShapeBox>
              </div>
            </Col>
            <Col
              md="10"
              lg="6"
              className="mt-3 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div className="mt-4">
                <Title color="light">
                  {t("Our Mission")} <br className="d-none d-md-block" />
                </Title>
                <Text color="lightShade">{t("about3")}</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};
Content2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Content2;
