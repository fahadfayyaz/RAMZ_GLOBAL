import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgMobile from "../../assets/image/jpeg/vimg.jpg";
import icon3dModel from "../../assets/image/png/icon-3d-model.png";
import iconLayout from "../../assets/image/png/icon-layot-25.png";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

const ContentCard = ({ iconImage, title, className, children, ...rest }) => (
  <Box
    {...rest}
    className={`d-flex align-items-start justify-content-start ${className}`}
  >
    <Box mr={4}>
      <img src={iconImage} alt="" />
    </Box>
    <Box>
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
);

const ImgStyled = styled.img`
  transform: rotate(10deg);
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  max-width: 70%;
  @media ${device.sm} {
    max-width: 50%;
  }
  @media ${device.md} {
    max-width: 33%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
  @media ${device.xl} {
    margin-left: 50px;
  }
`;

const Content2 = () => {
  const { t } = useTranslation(["common"]);
return(
  <>
    {/* <!-- Content section 2 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0">
            <div
              className="pl-5"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <ImgStyled src={imgMobile} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9">
            <Box className="pt-5 pt-lg-0">
              <Title>
                {t("What Kind of Softwares")}
                <br className="d-none d-sm-block d-md-none d-xl-block" />{t("Do We Develop?")}
              </Title>
              <Text>
                {t("PARA4")}
              </Text>
              <Box mt={4} pt={3}>
                <ContentCard
                  title={t("Customized Mobile Applications")}
                  iconImage={icon3dModel}
                  mb={4}
                >
                 {t("PARA5")}
                </ContentCard>
                <ContentCard
                  title={t("Customized Desktop Applications")}
                  iconImage={iconLayout}
                >
                  {t("PARA6")}
                 
                </ContentCard>

                <ContentCard
                  title={t("Customized Cloud-Based Applications")}
                  iconImage={iconLayout}
                >
                   {t("PARA7")}
                  
                </ContentCard>

                <ContentCard
                  title={t("Customized Web Applications")}
                  iconImage={iconLayout}
                >
                  {t("PARA8")}
                 
                </ContentCard>
              </Box>
            </Box>
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
