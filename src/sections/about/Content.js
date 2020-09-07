import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Section>
        <Container>
          <Row className="justify-content-center pb-4">
            <Title variant="hero">{t("What Do We Do?")}</Title>

            <Col lg="12" className="pl-lg-12">
              <Text>{t("about1")}</Text>
              <Text style={{ paddingTop: "10px" }}>{t("about2")}</Text>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

Content.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Content;
