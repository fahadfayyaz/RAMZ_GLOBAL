import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box, Section, Text } from "../Core";
import Logo from "../Logo";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
// import imgOval from "../../assets/image/png/l1-cta-oval.png";
// import svgCurve from "../../assets/image/svg/l1-curve-cta.svg";

const TitleStyled = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 22px;
`;

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} !important;
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const CopyRightArea = styled.div`
  border-top: ${({ dark, theme }) =>
    dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`};

  padding: 15px 0;
  p {
    color: ${({ dark, theme }) =>
      dark ? theme.colors.lightShade : theme.colors.darkShade};
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: ${({ dark, theme }) =>
        dark ? theme.colors.light : theme.colors.dark} !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const Footer = ({ isDark = true }) => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box bg={isDark ? "dark" : "light"}>
        <Container>
          <Box
            css={`
              padding: 80px 0 60px;
            `}
          >
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Box mb={5} className="text-center">
                  <Title color="light">REACH US AT</Title>
                </Box>
              </Col>
            </Row>
            <Row>
              <Col md="4" xl="4" lg="4" className="mb-5">
                <Box mb={5} className="text-center">
                  <Title style={{ fontSize: "3em", color: "white" }}>
                    Pakistan
                  </Title>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    4275 Village Center Ct. Mississauga, Ontario L4Z1V3
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    info@mmcgbl.ca
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    +1-647-993-5099
                  </Text>
                </Box>
              </Col>
              <Col md="4" xl="4" lg="4" className="mb-5">
                <Box mb={5} className="text-center">
                  <Title style={{ fontSize: "3em", color: "white" }}>
                    Germany
                  </Title>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    4275 Village Center Ct. Mississauga, Ontario L4Z1V3
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    info@mmcgbl.ca
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    +1-647-993-5099
                  </Text>
                </Box>
              </Col>
              <Col md="4" xl="4" lg="4" className="mb-5">
                <Box mb={5} className="text-center">
                  <Title style={{ fontSize: "3em", color: "white" }}>US</Title>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    4275 Village Center Ct. Mississauga, Ontario L4Z1V3
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    info@mmcgbl.ca
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    +1-647-993-5099
                  </Text>
                </Box>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="2" md="4">
                <Logo white={isDark} />
              </Col>
              <Col lg="10" md="8" className="mt-5 mt-lg-0">
                <Row>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        {t("About")}
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Our mission")}
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Our story")}
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Team Members")}
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        {t("Learn")}
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Tutorials")}
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            {t("How it works")}
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            {t("F.A.Q")}
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        {t("Stories")}
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Blog")}
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Tech stories ")}
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        {t("Hire")}
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Career")}
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Freelancers")}
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            {t("Trainee")}
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Box>
          <CopyRightArea dark={isDark ? 1 : 0}>
            <Row className="align-items-center">
              <Col sm="6" className="text-sm-left text-center mb-2 mb-sm-0">
                {/* <p>&copy; 2019 UXTheme, All Rights Reserved</p> */}
              </Col>
              <Col sm="6" className="text-sm-right text-center">
                <ul className="social-icons">
                  <li>
                    <a href="/#" target="_blank">
                      <i className="icon icon-logo-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_blank">
                      <i className="icon icon-logo-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#" target="_blank">
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </CopyRightArea>
        </Container>
      </Box>
    </>
  );
};
Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Footer;
