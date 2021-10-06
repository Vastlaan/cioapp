import styled from "styled-components";
import { fonts } from "./fonts";
import { respond } from ".";

// Headings

export const Heading1 = styled.h1`
  margin: ${(p) => (p.margin ? p.margin : "0")};
  font-family: ${fonts.heading};
  font-size: 3.7rem;
  font-weight: 600;
  line-height: 1.3;
  max-width: ${(p) => (p.wide ? p.wide : "65rem")};
  text-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.3);
  color: ${(p) => (p.color ? p.color : "var(--color-grey-4)")};
  text-align: ${(p) => (p.align ? p.align : "left")};

  ${() => respond("m", "font-size: 4.7rem;")}

  span {
    color: ${(p) => (p.color2 ? p.color2 : "var(--color-primary)")};
  }
`;

export const Heading2 = styled.h2`
  margin: ${(p) => (p.margin ? p.margin : "0")};
  font-family: ${fonts.heading};
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.3;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
  color: ${(p) => (p.color ? p.color : "var(--color-grey-1)")};
  text-align: ${(p) => (p.align ? p.align : "left")};

  ${() => respond("m", "font-size: 4.7rem;")}

  span {
    color: ${(p) => (p.color2 ? p.color2 : "var(--color-primary)")};
  }
`;
export const Heading3 = styled.p`
  margin: ${(p) => (p.margin ? p.margin : "0")};
  font-family: ${fonts.para};
  font-size: 2.7rem;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.3;
  color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
  text-align: ${(p) => (p.align ? p.align : "left")};

  ${() => respond("m", "font-size: 3.2rem;")}

  span {
    color: ${(p) => (p.color2 ? p.color2 : "var(--color-primary)")};
  }
`;
export const Heading4 = styled.p`
  margin: ${(p) => (p.margin ? p.margin : "0")};
  font-family: ${fonts.para};
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.3;
  color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
  text-align: ${(p) => (p.align ? p.align : "left")};

  ${() => respond("m", "font-size: 2.7rem;")}

  span {
    color: ${(p) => (p.color2 ? p.color2 : "var(--color-primary)")};
  }
`;

// Paragraphs

export const Text = styled.p`
  margin: ${(p) => (p.margin ? p.margin : "0")};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(p) => (p.color ? p.color : "var(--color-grey-4)")};
  max-width: ${(p) => (p.wide ? p.wide : "45rem")};
  text-align: ${(p) => (p.align ? p.align : "center")};
`;

export const TextBold = styled.p`
  margin: ${(p) => (p.margin ? p.margin : "0")};
  font-size: ${(p) => (p.size ? p.size : "2.2rem")};
  font-family: ${fonts.heading};
  color: ${(p) => (p.color ? p.color : "var(--color-grey-3)")};
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : "65rem")};
  text-align: ${(p) => (p.align ? p.align : "center")};
  font-weight: 600;
`;
