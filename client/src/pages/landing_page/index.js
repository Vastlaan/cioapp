import React, { useContext } from "react";
import { Context } from "../../store";
import Header from "../../components/header";
import Download from "../../components/download";
import Motivation from "../../components/motivation";
import ImageHeader from "../../img/header-2.jpg";
import SocialMedia from "../../components/social_media";
import Story from "../../components/story";
import Personel from "../../components/personel";

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

      <Story />

      <Personel />

      <Download />

      <SocialMedia
        cat={pageData.social_media_cat}
        title={pageData.social_media_title}
        description={pageData.social_media_description}
      />
    </>
  );
}
