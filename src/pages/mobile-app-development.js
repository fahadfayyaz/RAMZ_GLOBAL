import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/mobileAppDevelopment/Hero";
import Footer from "../components/Footer";
import Content from "../sections/mobileAppDevelopment/Content";
import Services from "../sections/mobileAppDevelopment/Services";
import Special from "../sections/mobileAppDevelopment/Special";
import Working from "../sections/mobileAppDevelopment/Working";

const MobileAppDevelopment = () => {
  return (
    <>
      {/* <Header /> */}
      <PageWrapper headerDark footerDark>
        <Hero />
        <Content />
        <Services />
        <Special />
        <Working />
      </PageWrapper>
    </>
  );
};
export default MobileAppDevelopment;
