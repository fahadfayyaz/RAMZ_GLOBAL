import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";
import imgPhone from "../../assets/image/jpeg/home2.jpg";
const SectionStyled = styled(Section)``;
import { Title, Section, Box, Text } from "../../components/Core";

const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  icon,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex align-items-center ${className}`}
    {...rest}
    css={`
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow};`};
      }
    `}
  >
    <Box
      size={55}
      minWidth={55}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
      mr={3}
    >
      {icon || <i className={`icon ${iconName}`}></i>}
    </Box>

    <Title variant="card" mb={0}>
      {title}
    </Title>
  </Box>
);

const mission = () => (
  <>
    <Section bg="#F2F2F2">
      <Container>
        <Row className="justify-content-center">
          <Col bg="#F2F2F2" lg="4">
            <img
              src={imgPhone}
              alt=""
              className="img-fluid rounded"
              style={{ height: "300px", width: "100%" }}
            />
          </Col>

          <Col lg="8">
            <Box className="text-left" mb={[4, 5]}>
              <Title style={{ color: "#262524" }}>
                Not Sure What Are You Looking For?
              </Title>
              <Text color="dark" className="text-left">
                If you are not sure that what is suitable for you or what do you
                actually want then get in touch with our experts. We will assess
                your requirements and will suggest a suitable solution for your
                business needs.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default mission;
