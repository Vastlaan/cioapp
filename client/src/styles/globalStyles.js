import { createGlobalStyle } from "styled-components";
import respond from "./respond";
import { fonts } from "./fonts";

export const GlobalStyles = createGlobalStyle`
  @keyframes slide{
      0%{
          opacity: 0;
          transform: translateX(100%);
      }
      100%{
          opacity: 1;
          transform: translateX(0);
      }
  }

  :root{
    --color-primary: #E93F36;

    --color-secondary: #2897FF;
    --color-secondary-light: #70BAFF;

    --color-tertiary: #A050FF;

    --color-green: #2a9d8f;

    --color-grey-1: #FAFAFA;
    --color-grey-2: #ddd;
    --color-grey-3: #919191;
    --color-grey-4: #222;
  }

  *,
  *::after,
  *::before{
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      line-height: inherit;
      ::-moz-scrollbar-width: none;
      font-family: inherit;
      
      
  }
  ::-webkit-scrollbar{display: none;}
  html{
      overflow-x: hidden;
      font-size: 50%;
      box-sizing: border-box;
      font-family: ${fonts.para};
      line-height: 1.3;
      ${() => respond("xs", `font-size:30%;`)}
      ${() => respond("l", `font-size:55%;`)}     
      ${() => respond("xxl", `font-size:62.5%;`)}
      ${() => respond("tv", `font-size:100%;`)}

      ${() => respond("m", "line-height: 1.6;")};
  }
  
  body{
      overflow-x: hidden;
      background-color: var(--color-grey-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: ${fonts.heading};
  }
  a{
      text-decoration: none;
      color:inherit;
  }
  button{
      cursor: pointer;
      &:active,:focus{
          outline: none;
      }
  }
  button, input, textarea{
      border: none;
  }
  input, textarea{
      &:active, :focus{
        outline: none;
        box-shadow: 0 0 5px var(--color-primary);
      }
      color: var(--color-grey-4);
  }
`;
