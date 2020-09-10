import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="#595857">
        <div className="pt-5"></div>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col xs="12">
              <Box py={4}>
                <Text
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  {t(
                    "We Innovate and turn your ideas into real-world applications. To fulfill your personal and business needs."
                  )}
                </Text>
                <Title
                  my={4}
                  variant="hero"
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  We Are A Premium Apps Development Company With International
                  Reach
                  <br className="d-none d-lg-block" />
                </Title>
                <Box
                  pt="12px"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1300"
                >
                  <a href="../../contact-3">
                    <Button>Get In Touch</Button>
                  </a>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

Hero.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Hero;
