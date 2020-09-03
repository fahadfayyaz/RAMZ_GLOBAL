import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/customized-software-development/Hero";
import Feature1 from "../sections/customized-software-development/Feature1";
import Content1 from "../sections/customized-software-development/Content1";
import Feature2 from "../sections/customized-software-development/Feature2";
import Content3 from "../sections/customized-software-development/Content3";
// import Testimonial from "../sections/customized-software-development/Testimonial";
// import CTA from "../sections/customized-software-development/CTA";

const LandingPage2 = () => {
  return (
    <>
      <PageWrapper headerDark>
        <Hero />
        <Feature1 />
        <Content1 />
        <Feature2 />
        <Content3 />
        {/* <Content2 />
        <Testimonial />
        <CTA /> */}
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
