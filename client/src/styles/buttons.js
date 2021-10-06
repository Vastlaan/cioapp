import styled from "styled-components";
import { fonts } from ".";

export const ButtonPrimary = styled.button`
  background-color: ${(p) =>
    p.backgroundColor ? p.backgroundColor : "var(--color-secondary)"};
  color: white;
  font-family: ${fonts.heading};
  font-weight: 600;
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1.6rem")};
  margin: ${(p) => (p.margin ? p.margin : "0")};
  padding: 1.4rem 2.2rem;
  transition: all 0.3s;
  border-radius: 3px;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1.4rem;
    font-size: 2.2rem;
  }

  &:hover {
    background-color: ${(p) =>
      p.backgroundColorHover
        ? p.backgroundColorHover
        : "var(--color-secondary-light)"};
  }
`;

export const ButtonRound = styled.button`
  background-color: ${(p) =>
    p.backgroundColor ? p.backgroundColor : "var(--color-primary)"};
  display: flex;
  align-items: center;
  color: ${(p) => (p.color ? p.color : "white")};
  padding: 1.9rem 2.7rem;
  border-radius: 5rem;
  border: 3px solid
    ${(p) => (p.backgroundColor ? p.backgroundColor : "var(--color-primary)")};

  font-size: ${(p) => (p.fontSize ? p.fontSize : "1.9rem")};
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s;

  svg {
    background-color: ${(p) => (p.color ? p.color : "white")};
    color: ${(p) =>
      p.backgroundColor ? p.backgroundColor : "var(--color-primary)"};
    font-size: 3.7rem;
    padding: 0px 3px;
    border-radius: 50%;
    margin-left: 0.9rem;
  }

  &:hover {
    background-color: transparent;
    color: ${(p) =>
      p.backgroundColor ? p.backgroundColor : "var(--color-primary)"};

    svg {
      background-color: transparent;
    }
  }
`;

export const ButtonPlane = styled.button`
border: none;
border-bottom: 2px solid white;
background-color: transparent;
margin: ${(p) => (p.margin ? p.margin : "0")};
display: flex;
align-items: center;
font-size: 2.7rem;
color: ${(p) => (p.color ? p.color : "white")};
cursor: pointer;

svg{
  margin-left: 1.4rem;
  color: ${(p) => (p.color ? p.color : "white")};
  font-size; 2.7rem;
}

`;
