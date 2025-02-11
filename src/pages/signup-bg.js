import React from "react";
import { Link } from "../../i18n";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Box,
  Text,
  Input,
  Checkbox,
  Span,
} from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Logo from "../components/Logo";

import { device } from "../utils";
import imgBg from "../assets/image/jpeg/sign-up-bg.jpg";

const BoxStyled = styled(Box)`
  background-image: url(${imgBg});
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
  }
`;

const BoxInner = styled(Box)`
  margin-top: -65px;
  min-height: 100vh;
`;

const FormStyled = styled.form`
  position: relative;
  padding: 40px 30px;
  @media ${device.sm} {
    padding: 53px 58px 50px;
  }
  box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.dark, 0.5)};
  width: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => rgba(theme.colors.dark, 0.55)};
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(7px);
    background: url(${imgBg}) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
`;

const AForgot = styled.a`
  color: ${({ theme }) => theme.colors.warning} !important;
  text-decoration: none !important;
`;

const SignUpBG = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled>
          <Box
            className="position-relative"
            css={`
              z-index: 10;
            `}
          >
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="10" xl="8">
                  <Box className="text-center" pt="40px">
                    <Logo white />
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <BoxInner className="d-flex align-items-center">
            <Container>
              <Box my="100px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled>
                      <Box
                        className="position-relative"
                        css={`
                          z-index: 10;
                        `}
                      >
                        <div className="mb-5 text-center">
                          <Title color="light" className="mb-2">
                            Sign Up
                          </Title>
                          <Text color="lightShade">
                            No credit card required
                          </Text>
                        </div>
                        <Box mb={4}>
                          <Input type="email" placeholder="Email address" />
                        </Box>
                        <Box mb={4}>
                          <Input type="text" placeholder="Company Name" />
                        </Box>
                        <Box mb={4} className="text-left">
                          <Checkbox>
                            <Span color="lightShade">
                              I agree to the{" "}
                              <Link href="/">
                                <AForgot>Terms & Condition</AForgot>
                              </Link>
                            </Span>
                          </Checkbox>
                        </Box>

                        <Button width="100%" type="submit" borderRadius={10}>
                          Send Reset Link
                        </Button>
                        <Box mt={3} color="lightShade" className="text-center">
                          Already have an account? {""}
                          <Link href="/signin-bg">
                            <AForgot>Sign in</AForgot>
                          </Link>
                        </Box>
                      </Box>
                    </FormStyled>
                  </Col>
                </Row>
              </Box>
            </Container>
          </BoxInner>
        </BoxStyled>
      </PageWrapper>
    </>
  );
};
export default SignUpBG;
