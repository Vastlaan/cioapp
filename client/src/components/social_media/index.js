import styled from "styled-components";
import { Heading3, Text, TextItalic } from "../../styles";
import { GrTwitter, GrInstagram, GrLinkedin } from "react-icons/gr";

export default function SocialMediaComponent({ cat, title, description }) {
  return (
    <Container>
      <TextItalic color="var(--color-primary)">{cat}</TextItalic>
      <Heading3 color="var(--color-grey-4)">{title}</Heading3>
      <Line />
      <Text>{description}</Text>
      <IconContainer>
        <Icon
          href="https://twitter.com/AND_nederland"
          aria-label="follow us on Twitter"
        >
          <GrTwitter color="skyblue" />
        </Icon>
        <Icon
          href="https://www.linkedin.com/showcase/and-nederland/"
          aria-label="follow us on LinkedIn"
        >
          <GrLinkedin color="#4267B2" />
        </Icon>
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 6.7rem auto 4.7rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  width: 10rem;
  height: 3px;
  background-color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
  margin: 1.4rem auto;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.7rem 0;
`;
const Icon = styled.a`
  margin: 0 1.4rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s;
  svg {
    font-size: 3.7rem;
  }
  &:hover {
    transform: scale(1.15);
  }
`;
