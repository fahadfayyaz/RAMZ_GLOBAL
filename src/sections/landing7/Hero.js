import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import { Title, Button, Section, Box, Text } from "../../components/Core";

const Hero = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="dark">
        <div className="pt-5"></div>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col md="11" lg="10" xl="9">
              <Box py={4}>
                <Text
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  {t(
                    "Do you want to put life into your mobile application idea?"
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
                  If yes, then you are in the right place.
                  <br className="d-none d-lg-block" />
                </Title>
                <Box
                  pt="12px"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1300"
                >
                  <Button>Get In Touch</Button>
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
