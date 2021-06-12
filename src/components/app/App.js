import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles";
import { Container } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>Hello Star Wars Films :)</Container>
    </ThemeProvider>
  );
};

export default App;
