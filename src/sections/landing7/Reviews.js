import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";
const SectionStyled = styled(Section)``;
import { Title, Section, Box, Text } from "../../components/Core";

import { GiCutDiamond } from "react-icons/gi";

import imgB1 from "../../assets/image/png/testimonial-brand-logo-1.png";
import imgB2 from "../../assets/image/png/testimonial-brand-logo-2.png";
import imgB3 from "../../assets/image/png/testimonial-brand-3.png";

import imgR1 from "../../assets/image/jpeg/l8-testimonial-user-image-1.jpg";
import imgR2 from "../../assets/image/jpeg/l8-testimonial-user-image-2.jpg";
import imgR3 from "../../assets/image/jpeg/l8-testimonial-user-image-3.jpg";

let myIcon;
const FeatureCard = ({
  color = "primary",
  iconName,
  icon,
  title,
  children,
  ...rest
}) => (
  <Box pt="15px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center mx-auto"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      {icon || <i className={`icon ${iconName}`}></i>}
    </Box>
    <div className="text-center">
      <Text
        color="light"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75} color="lightShade">
        {children}
      </Text>
    </div>
  </Box>
);

const ContentCard = ({
  className,
  imageBrand = imgB1,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box
    minHeight={["320px", null, `400px`]}
    borderColor="border"
    borderRadius={10}
    className={`d-flex flex-column ${className}`}
    {...rest}
    aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <Box className="text-center">
      <img src={imageBrand} alt="" className="img-fluid" />
    </Box>
    <Text color="#262524" mt={4} mb={3} className="text-center mb-0">
      {children}
    </Text>
    <Box className={`mt-auto`}>
      <Box className="text-center">
        <img
          src={image}
          alt=""
          className="img-fluid"
          css={`
            border-radius: 500px;
          `}
        />
      </Box>
      <Box className="flex-grow-1 text-center" mt={3}>
        <Title color="#262524" variant="card" mb={1}>
          {name}
        </Title>
        <Text variant="small" color="red">
          {company}
        </Text>
      </Box>
    </Box>
  </Box>
);

const Reviews = () => {
  return (
    <>
      <Section bg="#D9AB73">
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg="4" md="6" className="mb-5 mb-lg-0">
              <ContentCard
                name="Troy Patrick"
                company="CEO at CoWorks"
                image={imgR1}
                imageBrand={imgB1}
              >
                "You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save."
              </ContentCard>
            </Col>
            <Col lg="4" md="6" className="mb-5 mb-lg-0">
              <ContentCard
                name="Paromita Haque"
                company="CEO at CoWorks"
                image={imgR2}
                imageBrand={imgB2}
              >
                "Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users."
              </ContentCard>
            </Col>
            <Col lg="4" md="6" className="mb-5 mb-lg-0">
              <ContentCard
                name="Trashee Habbard"
                company="CEO at CoWorks"
                image={imgR3}
                imageBrand={imgB3}
              >
                "Must have book for students, who want to be Product Designer,
                UX Designer, or Interaction Designer."
              </ContentCard>
            </Col>
          </Row>

          <SectionStyled bg="#D9AB73">
            <Container>
              <Row className="justify-content-center mb-5">
                <Col lg="10">
                  <div className="text-center">
                    <Title color="#262524">
                      What Makes Us Different From Others?
                    </Title>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center">
                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="secondary"
                    iconName="icon-sidebar-2"
                    title="Experienced Team"
                  >
                    We have a team of experienced mobile application developers
                    for various platforms. They have years of experience in
                    their respective fields and we have already worked with
                    hundreds of customers and satisfied all of them.
                  </FeatureCard>
                </Col>

                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="primary"
                    iconName="icon-layout-11"
                    title="Affordable Solutions"
                  >
                    We offer premium quality services at the most affordable and
                    competitive rates in the market. We are very transparent in
                    our pricing, and we never charge any additional costs to our
                    customers in terms of hidden charges.
                  </FeatureCard>
                </Col>

                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="secondary"
                    icon={<GiCutDiamond color="blue" />}
                    title="100% Customer Satisfaction"
                  >
                    Customer satisfaction matters a lot for us and, we always go
                    the extra mile to make sure that all our customers are 100%
                    satisfied with our services.
                  </FeatureCard>
                </Col>

                <Col sm="6" md="6" lg="6" className="mt-3 mt-lg-5">
                  <FeatureCard
                    color="primary"
                    iconName="icon-infinite"
                    title="Domain Expertise"
                  >
                    We have an expert from every domain to assure you that you
                    get high-quality services and satisfying results.
                  </FeatureCard>
                </Col>
              </Row>
            </Container>
          </SectionStyled>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
