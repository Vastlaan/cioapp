import React from "react";
import styled from "styled-components";
import Img1 from "../../img/jeroen.jpg";
import Img2 from "../../img/hans.jpg";
import { respond, fonts, TextBold, FlexCol, Heading3 } from "../../styles";
import { BiMailSend } from "react-icons/bi";
import { SiGooglecalendar } from "react-icons/si";

const data = [
  {
    id: "person-1",
    img: Img1,
    name: "Jeroen Kleinhoven",
    function: "Benelux Executive AND Metalhead",
    description:
      "Stuur mij een e-mail of plan gelijk 30 minuten gesprek via Google Calendar.",
    mail: "hans.smans@and.digital",
    calendar:
      "https://calendar.google.com/calendar/u/0/r/eventedit?overrides=%5Bnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5B%22jeroen.kleinhoven%40and.digital%22%5D%5D%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5D%2Cnull%2C%5B%5D%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5D%5D",
  },
  {
    id: "person-2",
    img: Img2,
    name: "Hans Smans",
    function: "Marketing Manager (Benelux & Scotland)",
    description:
      "Stuur mij een e-mail of plan gelijk 30 minuten gesprek via Google Calendar.",
    mail: "jeroen.kleinhoven@and.digital",
    calendar:
      "https://calendar.google.com/calendar/u/0/r/eventedit?overrides=%5Bnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5B%22hans.smans%40and.digital%22%5D%5D%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5D%2Cnull%2C%5B%5D%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%5B%5D%5D",
  },
];

export default function PersonelComponent() {
  return (
    <Personel>
      <FlexCol margin="6.7rem 0 0 0">
        <Heading3 color="#222" align="center">
          Nieuwsgierig om eens <span>meer</span> te horen?
        </Heading3>

        <TextBold color="#222" align="center" margin="2.7rem 0 1.9rem 0">
          Mail ons dan of plan gelijk 30 minuten gesprek. Wij zijn benieuwd te
          horen of je nieuwe foto’s bevallen!
        </TextBold>
        <TextBold color="#222" align="center">
          Met vriendelijke groet,
        </TextBold>
      </FlexCol>
      <Container>
        {data.map((person) => {
          return (
            <Person key={person.id}>
              <Image>
                <img src={person.img} alt="person" />
              </Image>
              <h4>{person.name}</h4>
              <h6>{person.function}</h6>
              <Line />
              <p>{person.description}</p>
              <Social>
                {person.mail && (
                  <a href={`mailto:${person.mail}`}>
                    <BiMailSend />
                  </a>
                )}
                {person.calendar && (
                  <a href={person.calendar}>
                    <SiGooglecalendar />
                  </a>
                )}
              </Social>
            </Person>
          );
        })}
      </Container>
    </Personel>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding-bottom: 6.7rem;
  ${() => respond("m", "flex-direction: row; justify-content: center;")}
`;
const Personel = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 6.7rem 1.4rem 0 1.4rem;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--color-grey-4);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  width: 15rem;
  height: 15rem;
  transition: all 0.3s;
  margin-bottom: 2.7rem;

  img {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: var(--color-grey-4);

    svg {
      font-size: 3.7rem;
      margin-right: 1.4rem;
      color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
      transition: all 0.3s;

      &:hover {
        color: var(--color-secondary);
        transform: scale(1.2);
      }
    }
  }
`;
const Line = styled.div`
  margin: 1.4rem auto;
  width: 30%;
  height: 2px;
  background-color: var(--color-primary);
  transition: all 0.3s;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.7rem;
  font-family: ${fonts.para};
  h4 {
    font-size: 2.7rem;
    font-weight: 600;
    color: #222;
  }
  h6 {
    font-size: 1.4rem;
    font-weight: 300;
    color: #666;
  }
  p {
    font-size: 1.9rem;
    max-width: 40rem;
    text-align: center;
    margin-bottom: 1.4rem;
    color: #222;
  }
  &:hover {
    ${Image} {
      box-shadow: 0 0 1.4rem rgba(0, 0, 0, 0.6);
    }
    ${Line} {
      width: 100%;
    }
  }
`;
