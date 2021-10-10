import styled from "styled-components";
import respond from "./respond";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: ${(p) => (p.margin ? p.margin : "0")};

  svg {
    font-size: ${(p) => (p.fontSize ? p.fontSize : "3.2rem")};
    color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
  }
`;

export const Field = styled.div`
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${(p) => (p.margin ? p.margin : "1.4rem auto")};
  label {
    color: ${(p) => (p.color ? p.color : "var(--color-primary)")};
    font-size: 2.2rem;
    margin-bottom: 0.9rem;
  }
  input,
  textarea {
    width: 100%;
    max-width: 65rem;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.9rem 1.4rem;
    font-size: 1.6rem;
    color: ${(p) => (p.color ? p.color : "var(--color-grey-4)")};
    border-radius: 5px;
  }
  p {
    font-size: 1.4rem;
    color: ${(p) => p.theme.grey4};
  }
  span {
    color: ${(p) => p.theme.secondary};
  }
`;
export const ImageStory = styled.div`
  margin: 2.7rem;
  height: 30rem;
  width: 25rem;
  position: relative;
  box-shadow: 0 0 1.4rem rgba(240, 180, 91, 0.3);
  img {
    position: relative;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    top: 2.7rem;
    left: -2.7rem;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(240, 180, 91, 0.4);
    z-index: 1;
  }
`;
