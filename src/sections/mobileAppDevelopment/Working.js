import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPhone from "../../assets/image/png/img.png";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
const SectionStyled = styled(Section)``;

const WidgetContainer = styled(Box)`
  counter-reset: widget-counter;
`;

const WidgetStyled = styled(Box)`
  padding-left: 70px;
  position: relative;
  max-width: 411px;
  &:before {
    counter-increment: widget-counter;
    content: counter(widget-counter);
    position: absolute;
    left: 0;
    min-width: 49px;
    width: 49px;
    height: 49px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 500px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.light};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
`;

const Widget = ({ num = 1, title = "", children = "", ...rest }) => {
  return (
    <WidgetStyled {...rest}>
      <Title variant="card" mb={2}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </WidgetStyled>
  );
};

const Working = () => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      {/* <!-- Content1 section --> */}
      <SectionStyled>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <img src={imgPhone} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
              <div>
                <Title>
                  {t("Our Working Procedure")}
                  {/* <br className="d-none d-sm-block d-md-none d-xl-block" /> all
                   */}
                </Title>
                <Text>{t("mobile5")}</Text>
                <WidgetContainer mt={5}>
                  <Widget title={t("Requirements Gathering")} mb={4}>
                    {t("mobile6")}
                  </Widget>
                  <Widget title={t("Design")} mb={4}>
                    {t("mobile7")}
                  </Widget>

                  <Widget title={t("Development")} mb={4}>
                    {t("mobile8")}
                  </Widget>

                  <Widget title={t("Testing")} mb={4}>
                    {t("mobile9")}
                  </Widget>

                  <Widget title={t("Deployment")} mb={4}>
                    {t(
                      "If the application passes all the testing phases, we help you deploy it on your desired platforms."
                    )}
                  </Widget>

                  <Widget title={t("Maintainance")} mb={4}>
                    {t("mobile10")}
                  </Widget>
                </WidgetContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

Working.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Working;
