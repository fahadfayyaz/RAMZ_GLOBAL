import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import CTA from "../sections/about/CTA";
import Header from "../components/Header";

const WebsiteDevelopment = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Hero title="Website Development">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </Hero>
        <Content />
        <Team />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default WebsiteDevelopment;
