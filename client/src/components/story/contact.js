import styled from "styled-components";
import {
  respond,
  fonts,
  Heading3,
  TextItalic,
  Text,
  FlexCol,
  FlexRow,
  ImageStory,
} from "../../styles";
import { IoCallSharp, IoMailSharp, IoLogoFacebook } from "react-icons/io5";

export default function ContactComponent() {
  return (
    <Contact>
      <FlexCol>
        <ImageStory>
          <img src={Image} alt="update je socials" />
        </ImageStory>
      </FlexCol>
      <Content>
        <TextItalic>Upscale je Digital</TextItalic>
        <Heading3 margin="1.4rem">Upscale je Digital</Heading3>
        <Text align="left" color="white">
          Wij gaan graag in gesprek te vertellen hoe we klanten helpen met het
          upgrade van hun digitale ambities; en vooral het versnellen van jullie
          digitale vaardigheden.
        </Text>
        <FlexRow margin="1.4rem 0">
          <a href="tel:0299450325">
            <CustomLink>
              <IoCallSharp />
              <p>0299 450 325</p>
            </CustomLink>
          </a>
        </FlexRow>
        <FlexRow margin="1.4rem 0">
          <a href="mailto:info@itcontext.nl">
            <CustomLink>
              <IoMailSharp />
              <p>info@firsthair.nl</p>
            </CustomLink>
          </a>
        </FlexRow>
        <FlexRow margin="1.4rem 0">
          <a href="https://www.facebook.com/First-Hair-665490813512845">
            <CustomLink>
              <IoLogoFacebook />
              <p>Volg ons op Facebook</p>
            </CustomLink>
          </a>
        </FlexRow>
      </Content>
    </Contact>
  );
}

const Contact = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  ${() => respond("s", "flex-direction: row; justify-content: space-between;")}
`;

const Content = styled(FlexCol)`
  ${() => respond("s", `align-items: flex-start; justify-content: flex-start;`)}
  p {
    text-align: center;
    ${() => respond("s", `text-align: left;`)}
  }
`;
export const CustomLink = styled.div`
  display: flex;
  align-items: center;
  margin: 1.4rem 0;
  ${() =>
    respond(
      "m",
      `
                margin: 0;
                margin-right: 1.4rem;
            `
    )}
  svg {
    color: ${(p) => p.theme.primary};
    font-size: 2.7rem;
    margin-right: 0.9rem;
  }
  p {
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 300;
    line-height: 1.3;
    color: ${(p) => p.theme.grey_2};
  }
`;
