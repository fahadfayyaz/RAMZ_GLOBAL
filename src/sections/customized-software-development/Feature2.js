import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

const SectionStyled = styled(Section)``;

const FaqCard = ({ title, children, ...rest }) => (
  <Box {...rest}>
    <Title variant="card" mb={4} fontSize="24px" fontWeight="900" color="light">
      {title}
    </Title>
    <Text variant="small" color="lightShade">
      {children}
    </Text>
  </Box>
);

const FAQ = () => {
const { t } = useTranslation(["common"]);

return (
  
  <>
    <SectionStyled bg="dark">
      <Container>
        <Row className="justify-content-center">
          <Col xl="7" lg="8" md="9">
            <div className="text-center">
              <Title color="light">
                {t("What kind Of Services")}
                <br className="d-none d-sm-block" /> {t("Can We provide For Your Businesses?")}
              </Title>
              <Text color="lightShade">
               {t("PARA13")}
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg="6" className="mt-5">
            <FaqCard title={t("Validate Your Idea")}>
            {t("PARA14")}
             
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title={t("Innovate and compete")}>
            {t("PARA15")}
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title={t("Maximize your efficiency")}>
            {t("PARA16")}
             
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title={t("Speed up delivery")}>
            {t("PARA17")}
            </FaqCard>
          </Col>
          <Col lg="6" className="mt-5">
            <FaqCard title={t("Future-proof your web applications")}>
            {t("PARA18")}
            </FaqCard>
          </Col>

          <Col lg="6" className="mt-5">
            <FaqCard title={("Future-proof your web applications")}>
            {t("PARA19")}
             
            </FaqCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);
};

FAQ.propTypes = {
  t: PropTypes.func.isRequired,
};


export default FAQ;
