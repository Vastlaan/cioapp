import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Heading1,
  respond,
  TextBold,
  ButtonRound,
  Heading4,
} from "../../styles";
import { BsArrowRight } from "react-icons/bs";
import Illustration from "../../img/business.svg";

export default function HeaderComponent({
  title,
  category,
  description,
  btnLink,
  btnText,
  image,
}) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize, false);

    return () => window.removeEventListener("resize", handleResize, false);
  }, []);

  const scrollToDownloadSection = () => {
    const section = document.querySelector("#download_section");
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <Header image={image}>
      <Heading4 align={isMobile ? "center" : "left"}>{category}</Heading4>
      <Heading1 align={isMobile ? "center" : "left"} margin=".9rem 0 0 0">
        {title}
      </Heading1>

      <TextBold margin="2.7rem 0 4.7rem 0" align={isMobile ? "center" : "left"}>
        {description}
      </TextBold>

      <ButtonRound fontSize="2.2rem" onClick={scrollToDownloadSection}>
        {btnText}
        <BsArrowRight />
      </ButtonRound>

      <ImageContainer>
        <img src={Illustration} alt="business" />
      </ImageContainer>
    </Header>
  );
}

const Header = styled.header`
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 4.7rem 1.4rem;

  ${() => respond("m", "padding: 8.7rem 6.7rem; align-items: flex-start;")};
`;
const ImageContainer = styled.div`
  display: none;
  justify-content: center;
  width: 45rem;
  position: absolute;
  right: 0;
  top: 15%;
  z-index: -1;

  ${respond("m", "display: flex;")}

  img {
    width: 100%;
    object-fit: cover;
  }
`;
