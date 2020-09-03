import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgMobile from "../../assets/image/jpeg/vimg.jpg";
import icon3dModel from "../../assets/image/png/icon-3d-model.png";
import iconLayout from "../../assets/image/png/icon-layot-25.png";

const ContentCard = ({ iconImage, title, className, children, ...rest }) => (
  <Box
    {...rest}
    className={`d-flex align-items-start justify-content-start ${className}`}
  >
    <Box mr={4}>
      <img src={iconImage} alt="" />
    </Box>
    <Box>
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
);

const ImgStyled = styled.img`
  transform: rotate(10deg);
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  max-width: 70%;
  @media ${device.sm} {
    max-width: 50%;
  }
  @media ${device.md} {
    max-width: 33%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
  @media ${device.xl} {
    margin-left: 50px;
  }
`;

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0">
            <div
              className="pl-5"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <ImgStyled src={imgMobile} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9">
            <Box className="pt-5 pt-lg-0">
              <Title>
                What Kind of Softwares{" "}
                <br className="d-none d-sm-block d-md-none d-xl-block" /> do We
                Develop?
              </Title>
              <Text>
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <Box mt={4} pt={3}>
                <ContentCard
                  title="Customized Mobile Applications"
                  iconImage={icon3dModel}
                  mb={4}
                >
                  Get your customized mobile applications developed by the hands
                  of your professional. If you need any kind of application for
                  your business needs, then we got you covered.
                </ContentCard>
                <ContentCard
                  title="Customized Desktop Applications"
                  iconImage={iconLayout}
                >
                  We develop multipurpose desktop applications for your
                  businesses according to your customized specifications.
                </ContentCard>

                <ContentCard
                  title="Customized Cloud-Based Applications"
                  iconImage={iconLayout}
                >
                  We provide custom cloud-based applications that are fast,
                  efficient, and tailor-made according to your business needs.
                </ContentCard>

                <ContentCard
                  title="Customized Web Applications"
                  iconImage={iconLayout}
                >
                  We develop multipurpose web applications to meet all your
                  business needs and to provide you with ease to handle your
                  business processes by sitting anywhere in the world.
                </ContentCard>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
