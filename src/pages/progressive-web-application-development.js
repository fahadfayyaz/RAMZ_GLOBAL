import React from "react";
import Hero from "../sections/progressive-web-application-development/Hero";

import Feature from "../sections/progressive-web-application-development/Feature";
import Content1 from "../sections/progressive-web-application-development/Content1";

import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero />

        <Content1 />

        <Feature />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
