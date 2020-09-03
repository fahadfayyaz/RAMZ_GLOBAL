import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/turn-your-idea-into-reality/Hero";
import Content from "../sections/turn-your-idea-into-reality/Content";
import Services from "../sections/turn-your-idea-into-reality/Services";
import Feature1 from "../sections/turn-your-idea-into-reality/Feature1";
import Header from "../components/Header";
const GraphicDesign = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Hero />
        <Content />
        <Services />
        <Feature1 />
      </PageWrapper>
    </>
  );
};
export default GraphicDesign;
