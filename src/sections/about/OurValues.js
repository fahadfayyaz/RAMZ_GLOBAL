import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import { device } from "../../utils";
import imgAuthor from "../../assets/image/jpeg/author1.jpg";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
const SectionStyled = styled(Section)``;

const Author = styled(Box)`
  min-width: 271px;
  max-width: 271px;
  min-height: 271px;
  max-height: 271px;
  border-radius: 500px;
  overflow: hidden;
  margin-bottom: 30px;
  @media ${device.lg} {
    margin-bottom: 0;
  }
`;

const OurValues = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      {/* <!-- Fact section 1 --> */}
      <SectionStyled bg="#f6f6f8">
        <Container>
          <Row>
            <Col xs="12" className="mb-5">
              <div className="text-center">
                <Title>{t("Our Values")}</Title>
              </div>
            </Col>
            <Col
              lg="4"
              md={{ span: 3, offset: 3 }}
              sm={{ span: 3, offset: 3 }}
              className="offset-lg-1 mb-4 offset-mb-1 mb-lg-0"
            >
              <Author>
                <img src={imgAuthor} alt="Author" />
              </Author>
            </Col>
            <Col lg="7" className="pr-lg-5">
              <div className="author-text">
                <Text variant="small" my={4}>
                  {t("about Values")}
                </Text>
                <Text variant="small">{t("about Values1")}</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};
OurValues.propTypes = {
  t: PropTypes.func.isRequired,
};

export default OurValues;
