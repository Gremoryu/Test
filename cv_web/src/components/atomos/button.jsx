import { Button } from "@mui/material";
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0007AB",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

export default function button() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          fontWeight: "bold",
          fontFamily: "Inria Sans",
          fontSize: '2.5vh',
          borderRadius: "10px",
          boxShadow: "none",
          textTransform:'none'
        }}
      >
        Hire me
      </Button>
    </ThemeProvider>
  );
}
