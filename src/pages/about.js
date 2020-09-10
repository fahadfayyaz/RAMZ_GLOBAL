import React from "react";

import PageWrapper from "../components/PageWrapper";
// import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Hero from "../sections/about/Hero";
import Team from "../sections/about/Team";
import CTA from "../sections/about/CTA";
import Content2 from "../sections/about/Content2";
import OurValues from "../sections/about/OurValues";
const About = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        <Content />
        <OurValues />
        <Content2 />
        <Team />

        <CTA />
      </PageWrapper>
    </>
  );
};
export default About;
