import React from "react";
import { Link } from "react-router-dom";
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
      <Heading4>{category}</Heading4>
      <Heading1 margin=".9rem 0 0 0">{title}</Heading1>

      <TextBold margin="3.7rem 0" align="left">
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
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: 6.7rem 1.4rem;
  border-bottom: 1px solid var(--color-grey-2);
  ${() => respond("m", "padding: 8.7rem 6.7rem;")};
`;
const ImageContainer = styled.div`
  display: none;
  justify-content: center;
  width: 45rem;
  position: absolute;
  right: 0;
  top: 10%;
  z-index: -1;

  ${respond("m", "display: flex;")}

  img {
    width: 100%;
    object-fit: cover;
  }
`;
