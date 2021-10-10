import React from "react";
import styled from "styled-components";
import { TextBold } from "../../styles";

export default function MotivationComponent({ text, color, text2, text3 }) {
  return (
    <Motivation>
      <TextBold color={color} align="left">
        {text}
      </TextBold>
      {text2 && (
        <TextBold color={color} align="left" margin=".9rem 0 1.9rem 0">
          {text2}
        </TextBold>
      )}
      {text3 && (
        <TextBold color={color} align="left">
          {text3}
        </TextBold>
      )}
    </Motivation>
  );
}

const Motivation = styled.section`
  padding: 6.7rem 1.4rem;
  background-color: white;
`;
