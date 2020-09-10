import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box, Text } from "../Core";
import Logo from "../Logo";
import { marginTop } from "styled-system";

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
            <Row className="justify-content-center">
              <Col lg="6" md="6">
                <Logo white={isDark} />
                <Box mb={5} className="text-left">
                  <Title
                    style={{
                      fontSize: "1.8em",
                      color: "white",
                      marginTop: "50px",
                    }}
                  >
                    Head Office
                  </Title>
                  <Text
                    style={{
                      fontSize: "1em",
                      color: "white",
                      marginTop: "-30px",
                    }}
                  >
                    Address: 4275 Village Center Ct. Mississauga, Ontario L4Z1V3
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    email: info@mmcgbl.ca
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    Tell: +1-647-993-5099
                  </Text>

                  <Title style={{ fontSize: "1.8em", color: "white" }}>
                    Germany
                  </Title>
                  <Text
                    style={{
                      fontSize: "1em",
                      color: "white",
                      marginTop: "-30px",
                    }}
                  >
                    Address: 4275 Village Center Ct. Mississauga, Ontario L4Z1V3
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    email: info@mmcgbl.ca
                  </Text>
                  <Text style={{ fontSize: "1em", color: "white" }}>
                    Tell: +1-647-993-5099
                  </Text>
                </Box>
              </Col>
              <Col lg="6" md="6" className="mt-5 mt-lg-0">
                <Row style={{ marginTop: "100px" }}>
                  <Col xs="4" lg="4">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        style={{ fontSize: "1.5em" }}
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        Quick links
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/" target="_blank">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="../../about" target="_blank">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="../../contact-3" target="_blank">
                            Contact Us
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="5" lg="5">
                    <div className="mb-lg-4">
                      <TitleStyled
                        style={{ fontSize: "1.5em" }}
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        Our Expertise
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/#" target="_blank">
                            Mobile App development
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            Progressive web app development
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            Customize web app development
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="3" lg="3">
                    <div className="mb-lg-4">
                      <TitleStyled
                        style={{ fontSize: "1.5em" }}
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        Follow us
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/#" target="_blank">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            linkedIn
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
              <Col
                sm="6"
                className="text-sm-left text-center mb-2 mb-sm-0"
              ></Col>
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

export default Footer;
