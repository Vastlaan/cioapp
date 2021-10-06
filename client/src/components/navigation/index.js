import React, { useContext } from "react";
import styled from "styled-components";
import Logo from "./logo";
import Flags from "country-flag-icons/react/3x2";
import { ButtonPlane } from "../../styles";
import { Context } from "../../store";
import { en, nl } from "../../data";

export default function NavigationComponent() {
  const [state, dispatch] = useContext(Context);

  const { pageData } = state;

  return (
    <Navigation>
      <Container>
        <Logo />

        {state.language === "nl" ? (
          <ButtonLang
            onClick={() =>
              dispatch({
                type: "SET_DATA",
                payload: { data: en, language: "en" },
              })
            }
          >
            <Flags.GB title="English Version" width="48" />
          </ButtonLang>
        ) : (
          <ButtonLang
            onClick={() =>
              dispatch({
                type: "SET_DATA",
                payload: { data: nl, language: "nl" },
              })
            }
          >
            <Flags.NL title="Dutch Version" width="48" />
          </ButtonLang>
        )}
      </Container>
    </Navigation>
  );
}

const Navigation = styled.nav`
  width: 100%;
  border-bottom: 1px solid var(--color-grey-2);
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.9rem 1.4rem;
`;
const ButtonLang = styled.button`
  margin-left: auto;
  background-color: transparent;
  color: var(--color-primary);

  svg {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  }
`;
