import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPhone from "../../assets/image/png/img.png";

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
                  Our Working Procedure{" "}
                  {/* <br className="d-none d-sm-block d-md-none d-xl-block" /> all
                   */}
                </Title>
                <Text>
                  Our working procedure is very smooth and we work
                  collaboratively with all our clients to ensure that our
                  customers get their requirements fulfilled in a way they want.
                  We follow a simple six-step procedure when developing a mobile
                  application.
                </Text>
                <WidgetContainer mt={5}>
                  <Widget title="Requirements Gathering" mb={4}>
                    In the first step, we do meetings with our clients and
                    gather their requirements that what they actually want to be
                    developed for their business. We do detailed sessions with
                    our customers so that we do not miss any specifications.
                  </Widget>
                  <Widget title="Design" mb={4}>
                    Based on the requirements gathered in the first step, we
                    make an elegant and responsive design of mobile applications
                    for our customers.
                  </Widget>

                  <Widget title="Development" mb={4}>
                    Once you approve our design, we will forward it to our
                    professional team of developers to get your design coded
                    into a real-time mobile application.
                  </Widget>

                  <Widget title="Testing" mb={4}>
                    This is the most important step where we test the
                    application for all its functionality and check whether it
                    meets our customers’ requirements.
                  </Widget>

                  <Widget title="Deployment" mb={4}>
                    If the application passes all the testing phases, we help
                    you deploy it on your desired platforms.
                  </Widget>

                  <Widget title="Maintainance" mb={4}>
                    Not only do we help our customers to develop their mobile
                    application but, we also offer them after development
                    support for the maintenance of their applications and to
                    ensure that their apps keep running without any problems.
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

export default Working;
