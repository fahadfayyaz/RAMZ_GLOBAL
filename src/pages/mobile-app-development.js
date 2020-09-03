import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/mobileAppDevelopment/Hero";
import Header from "../components/Header";
import Content from "../sections/mobileAppDevelopment/Content";
import Services from "../sections/mobileAppDevelopment/Services";
import Special from "../sections/mobileAppDevelopment/Special";
import Working from "../sections/mobileAppDevelopment/Working";

const MobileAppDevelopment = () => {
  return (
    <>
      <Header />
      <PageWrapper>
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
