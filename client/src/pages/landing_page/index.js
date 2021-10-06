import React, { useContext } from "react";
import { Context } from "../../store";
import Header from "../../components/header";
import Download from "../../components/download";
import Motivation from "../../components/motivation";
import ImageHeader from "../../img/header-2.jpg";

export default function LandingPage() {
  const [state] = useContext(Context);

  const { pageData } = state;

  return (
    <>
      <Header
        title={pageData.landing_header_title}
        category={pageData.landing_header_category}
        description={pageData.landing_header_description}
        btnLink={pageData.landing_header_btn_link}
        btnText={pageData.landing_header_btn_text}
        image={ImageHeader}
      />

      <Download />

      <Motivation text={pageData.landing_motivation} />
    </>
  );
}
