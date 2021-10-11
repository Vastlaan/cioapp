import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store";
import styled from "styled-components";
import download from "downloadjs";
import {
  ButtonPrimary,
  Field,
  Heading3,
  Text,
  respond,
  TextBold,
} from "../../styles";
import { BiDownload, BiError } from "react-icons/bi";
import ReactLoading from "react-loading";

export default function DownloadComponent() {
  const [state, dispatch] = useContext(Context);

  const { pageData } = state;

  const [email, setEmail] = useState("");
  const [veryficationCode, setVeryficationCode] = useState("");

  const [pending, setPending] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    setPending(true);

    try {
      const response = await fetch("https://api.andtitles.nl/api/fetchPhoto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, veryficationCode }),
      });

      const data = await response.json();

      if (data.status === "error") {
        setPending(false);
        return setError({ field: data.field, message: data.message });
      }

      setError({});

      if (data.user) {
        dispatch({ type: "SET_USER", payload: data.user });
        const photoResponse = await fetch(
          `https://api.andtitles.nl/?id=${data.user.fileUrl}`
        );
        const blob = await photoResponse.blob();

        download(blob, data.user.email);
        setPending(false);
        setSuccess(true);
      }
    } catch (e) {
      setPending(false);
      setError({
        field: "general",
        message: "Ups, something went wrong, please try again later.",
      });
      console.error("Error", e.message);
    }
  };

  return (
    <Container id="download_section">
      <Form onSubmit={loginUser}>
        <Heading3 color="var(--color-grey-4)" margin="0 0 .6rem 0">
          {pageData.downloads_form_title}
        </Heading3>
        <Text margin="0 0 2.2rem 0" align="left">
          {pageData.downloads_form_description}
        </Text>
        <Field>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email_input"
            placeholder="johnsmith@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error?.field === "email" && (
            <Error>
              <BiError />
              {error.message}
            </Error>
          )}
        </Field>
        <Field>
          <label htmlFor="email">Verificatie Code:</label>
          <input
            type="text"
            name="veryfication_code_input"
            id="veryfication_code_input"
            placeholder="ABCD1234"
            onChange={(e) => setVeryficationCode(e.target.value)}
          />
          {error?.field === "veryfication_code" && (
            <Error>
              <BiError />
              {error.message}
            </Error>
          )}
        </Field>

        {error?.field === "general" && (
          <Error>
            <BiError />
            {error.message}
          </Error>
        )}
        <ButtonPrimary type="submit" margin=".9rem 0 2.7rem 0">
          {pending ? (
            <>
              <ReactLoading
                type="bubbles"
                color="#fff"
                height={19}
                width={43}
              />
              Wachten A.u.b...
            </>
          ) : (
            <>
              <BiDownload />
              Download Fotos
            </>
          )}
        </ButtonPrimary>
        {success && (
          <Success>
            <Close type="button" onClick={() => setSuccess(false)}>
              X
            </Close>
            <Text color="white">{pageData.downloads_form_success}</Text>
          </Success>
        )}
      </Form>
    </Container>
  );
}

const Container = styled.section`
  padding: 6.7rem 1.4rem;
  display: flex;
  flex-direction: column;
  aling-items: center;
  background-color: var(--color-primary);
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 4.7rem 1.9rem;
  min-width: 37rem;
  display: flex;
  flex-direction: column;
  aling-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  scroll-margin: 2.7rem;

  ${respond("m", "min-width: 45rem;padding: 4.7rem;")}
`;

const Error = styled.small`
  font-size: 1.4rem;
  letter-spacing: 0.2;
  margin: 0.6rem 0;
  padding: 0.6rem 0.9rem;
  color: white;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  border-radius: 3px;

  svg {
    margin-right: 0.6rem;
    font-size: 1.9rem;
  }
`;

const Success = styled.div`
  position: relative;
  padding: 1.9rem;
  background-color: var(--color-green);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.9rem;
    color: white;
    margin-right: 0.9rem;
  }
`;

const Close = styled.button`
  background-color: transparent;
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  font-size: 1.4rem;
  color: white;
`;

const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(p) => (p.isFullScreen ? "0" : "2.7rem auto")};
  width: ${(p) => (p.isFullScreen ? "100vw" : "100%")};
  height: ${(p) => (p.isFullScreen ? "100vh" : "30rem")};
  position: ${(p) => (p.isFullScreen ? "fixed" : "relative")};
  inset: 0;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.9);

  img {
    width: ${(p) => (p.isFullScreen ? "100%" : "100%")};
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }
  button {
    position: absolute;
    top: 1.9rem;
    right: 1.9rem;
    background-color: ${(p) =>
      p.isFullScreen ? "var(--color-secondary)" : "rgba(255, 255, 255, 0.3)"};
    padding: 0rem;
    font-size: 1.9rem;
    letter-spacing: 0.1rem;
    z-index: 9;
    transition: all 0.3s;
    width: 4.7rem;
    height: 4.7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: var(--color-secondary);
    }

    svg {
      font-size: 3.7rem;
      color: ${(p) => (p.isFullScreen ? "white" : "white")};
    }
  }
`;
