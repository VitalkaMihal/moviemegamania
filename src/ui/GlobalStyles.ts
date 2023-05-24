import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Exo 2', sans-serif;
  background-color: ${Colors.Black};
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

`;
