import styled from "styled-components";
import { respond, Heading3, TextBold, FlexCol } from "../../styles";

export default function AboutComponent() {
  return (
    <About>
      <Content>
        <Line />
        <Heading3 margin="1.4rem 0" color="var(--color-grey-4)">
          Update je <span>Socials</span>
        </Heading3>
        <TextBold maxWidth="55rem" align="left">
          Op FFWD Insights heeft onze fotograaf enkele mooie foto’s gemaakt en
          die kun je hier downloaden.
        </TextBold>
        <br />
        <TextBold maxWidth="55rem" align="left">
          Handig om je sociale profielen te updaten.
        </TextBold>
      </Content>
      <Content>
        <Line />
        <Heading3 margin="1.4rem 0" color="var(--color-grey-4)">
          Upscale je <span>Digitaal</span>
        </Heading3>
        <TextBold maxWidth="55rem" align="left">
          Wij gaan graag in gesprek te vertellen hoe we klanten helpen met het
          upgrade van hun digitale ambities; en vooral het versnellen van jullie
          digitale vaardigheden.
        </TextBold>
      </Content>
    </About>
  );
}
const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${() =>
    respond(
      "xl",
      "flex-direction: row; justify-content: space-around; margin: 2.7rem 0;"
    )}
  ${() =>
    respond(
      "xxl",
      "flex-direction: row; justify-content: space-between; margin: 2.7rem 0;"
    )}
`;
const Content = styled(FlexCol)`
  padding: 6.7rem 2.7rem;
  background-color: white;
  border-radius: 5px;
  ${() =>
    respond(
      "xl",
      `align-items: flex-start; justify-content: flex-start; box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);`
    )}
  p {
    text-align: center;
    ${() => respond("xl", `text-align: left;`)}
  }
`;
const Line = styled.div`
  width: 10rem;
  height: 5px;
  background-color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
  margin: 1.4rem 0;
`;
