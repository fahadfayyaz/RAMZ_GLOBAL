import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";
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
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>Not Sure What Are You Looking For?</Title>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default mission;
