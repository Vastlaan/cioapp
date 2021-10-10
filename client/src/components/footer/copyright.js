import styled from "styled-components";
import { fonts } from "../../styles";

export default function CopyrightComponent() {
  return (
    <Copyright>
      <p>
        &copy; {new Date().getFullYear()} Copyright{" "}
        <a href="https://and.digital">AND Digital</a> All rights reserved.
      </p>
    </Copyright>
  );
}
const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  p {
    font-size: 1.4rem;
    line-height: 1;
    letter-spacing: 0.15rem;
    font-weight: 400;
    font-family: ${fonts.para};
    color: white;
    text-align: center;
    a {
      margin: 0.9rem 0 0 0;
      padding: 0.6rem 0.9rem;
      background-color: var(--color-grey-4);
      color: ${(p) => p.theme.white};
      display: inline-block;
      transition: all 0.3s;
      box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
      &:hover {
        transform: rotate(4deg) scale(1.05);
      }
    }
  }
`;
