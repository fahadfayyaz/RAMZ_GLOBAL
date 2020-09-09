import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPhone from "../../assets/image/png/l7-mobile.png";
import { flex } from "styled-system";

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
    <WidgetStyled {...rest} style={{ display: "flex" }}>
      <Title variant="card" mb={2} style={{ margin: "10px 0px" }}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </WidgetStyled>
  );
};

const Working = () => {
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
                  Industries That We’ve Served{" "}
                  {/* <br className="d-none d-sm-block d-md-none d-xl-block" /> all
                   */}
                </Title>
                <Text>
                  In the past years, we have worked with thousands of businesses
                  and helped them with all their software solutions. We have
                  severed hundreds of industries and provided them
                  highly-efficient solutions for their businesses.
                </Text>
                <WidgetContainer mt={5}>
                  <Widget title="Sports " mb={4}></Widget>
                  <Widget title="Health and Fitness" mb={4}></Widget>

                  <Widget
                    title="Ecommerce Stores and Applications."
                    mb={4}
                  ></Widget>

                  <Widget title="Educational Solutions" mb={4}></Widget>

                  <Widget title="Delivery Apps" mb={4}></Widget>

                  <Widget title="Tracking Apps" mb={4}></Widget>

                  <Widget title="Finance Solutions" mb={4}></Widget>
                  <Widget title="Enterprise Solutions" mb={4}></Widget>
                  <Widget title="And many other industries." mb={4}></Widget>
                </WidgetContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Working;
