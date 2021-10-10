import styled from "styled-components";
import { respond, Heading3, TextBold, FlexCol } from "../../styles";

export default function AboutComponent() {
  return (
    <About>
      <Content>
        <Line color="var(--color-tertiary)" />
        <Heading3 margin="1.4rem 0" color="var(--color-tertiary)">
          Update je Socials
        </Heading3>
        <TextBold maxWidth="45rem" align="left" color="var(--color-grey-4)">
          Op FFWD Insights heeft onze fotograaf enkele mooie foto’s gemaakt en
          die kun je hier downloaden; handig om je sociale profielen te updaten.
        </TextBold>
      </Content>
      <Content>
        <Line />
        <Heading3 margin="1.4rem 0" color="var(--color-primary)">
          Upscale je Digital
        </Heading3>
        <TextBold maxWidth="45rem" align="left" color="var(--color-grey-4)">
          Wij gaan graag in gesprek te vertellen hoe we klanten helpen met het
          upgrade van hun digitale ambities; en vooral het versnellen van jullie
          digitale vaardigheden.
        </TextBold>
      </Content>
    </About>
  );
}
const About = styled.div`
  margin-bottom: 8.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${() => respond("s", "flex-direction: row; justify-content: space-between;")}
`;
const Content = styled(FlexCol)`
  padding: 2.7rem;
  ${() => respond("s", `align-items: flex-start; justify-content: flex-start;`)}
  p {
    text-align: center;
    ${() => respond("s", `text-align: left;`)}
  }
`;
const Line = styled.div`
  width: 10rem;
  height: 5px;
  background-color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
  margin: 1.4rem 0;
`;
