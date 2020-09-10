import React from "react";
import Hero from "../sections/landing7/Hero";
import Fact from "../sections/landing7/Fact";

import CaseStudies from "../sections/landing7/CaseStudies";
import Reviews from "../sections/landing7/Reviews";
import Feature from "../sections/landing7/Feature";
import Feature2 from "../sections/landing7/Feature2";
import Contact from "../sections/landing7/Contact";
import Working from "../sections/landing7/Working";
import Mission from "../sections/landing7/mission";
import PageWrapper from "../components/PageWrapper";

const LandingPage7 = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />
        <Mission />
        {/* <Feature2 /> */}
        <Feature />

        <Working />

        {/* <CaseStudies /> */}

        <Reviews />
        {/* <Feature2 /> */}
        <Contact />
      </PageWrapper>
    </>
  );
};
export default LandingPage7;
