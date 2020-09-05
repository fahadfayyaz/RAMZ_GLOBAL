import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";
const SectionStyled = styled(Section)``;
import { Title, Section, Box, Text } from "../../components/Core";

import { GiCutDiamond } from "react-icons/gi";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import imgB1 from "../../assets/image/png/testimonial-brand-logo-1.png";
import imgB2 from "../../assets/image/png/testimonial-brand-logo-2.png";
import imgB3 from "../../assets/image/png/testimonial-brand-3.png";

import imgR1 from "../../assets/image/jpeg/l8-testimonial-user-image-1.jpg";
import imgR2 from "../../assets/image/jpeg/l8-testimonial-user-image-2.jpg";
import imgR3 from "../../assets/image/jpeg/l8-testimonial-user-image-3.jpg";

let myIcon;
const FeatureCard = ({
  color = "primary",
  iconName,
  icon,
  title,
  children,
  ...rest
}) => (
  <Box pt="15px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center mx-auto"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      {icon || <i className={`icon ${iconName}`}></i>}
    </Box>
    <div className="text-center">
      <Text
        color="light"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75} color="lightShade">
        {children}
      </Text>
    </div>
  </Box>
);

const ContentCard = ({
  className,
  imageBrand = imgB1,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box
    minHeight={["320px", null, `400px`]}
    borderColor="border"
    borderRadius={10}
    className={`d-flex flex-column ${className}`}
    {...rest}
    aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <Box className="text-center">
      <img src={imageBrand} alt="" className="img-fluid" />
    </Box>
    <Text color="lightShade" mt={4} mb={3} className="text-center mb-0">
      {children}
    </Text>
    <Box className={`mt-auto`}>
      <Box className="text-center">
        <img
          src={image}
          alt=""
          className="img-fluid"
          css={`
            border-radius: 500px;
          `}
        />
      </Box>
      <Box className="flex-grow-1 text-center" mt={3}>
        <Title color="light" variant="card" mb={1}>
          {name}
        </Title>
        <Text variant="small" color="lightShade" opacity={0.5}>
          {company}
        </Text>
      </Box>
    </Box>
  </Box>
);

const Special = () => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <Section bg="dark">
        <Container>
          <SectionStyled bg="dark">
            <Container>
              <Row className="justify-content-center mb-5">
                <Col lg="10">
                  <div className="text-center">
                    <Title color="light">
                      {t("What Makes Us Different From Others?")}
                    </Title>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="secondary"
                    iconName="icon-sidebar-2"
                    title={t("Experienced Team")}
                  >
                    {t("mobile1")}
                  </FeatureCard>
                </Col>

                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="primary"
                    iconName="icon-layout-11"
                    title={t("Affordable Solutions")}
                  >
                    {t("mobile2")}
                  </FeatureCard>
                </Col>

                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="secondary"
                    icon={<GiCutDiamond color="blue" />}
                    title={t("100% Customer Satisfaction")}
                  >
                    {t("mobile3")}
                  </FeatureCard>
                </Col>

                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="primary"
                    iconName="icon-infinite"
                    title={t("Domain Expertise")}
                  >
                    {t("mobile4")}
                  </FeatureCard>
                </Col>
              </Row>
            </Container>
          </SectionStyled>
        </Container>
      </Section>
    </>
  );
};

Special.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Special;
