import React from "react";
import styled from "styled-components";
import Copyright from "./copyright";

// this component is styled with normal CSS (as an example)

export default function FooterComponent() {
  return (
    <Footer>
      <Copyright />
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: var(--color-primary);
`;
