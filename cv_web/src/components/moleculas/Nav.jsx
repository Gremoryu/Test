import React from "react";
import { Box, Toolbar, Button, createTheme } from "@mui/material";
import { AppBar, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "../css/body.css";



const options = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Portfolio",
    url: "/information",
  },
];

const Theme = createTheme({
  palette: {
    primary: {
      main: "#08203D",
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

export default function Nav() {
  //Intento de modo oscuro
  // const [theme, setTheme] = useState('dark')

  // const switchTheme = () => 
  //   theme === 'dark' ? setTheme('light') : setTheme('dark')

  return (
    <ThemeProvider theme={Theme}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#08203D", boxShadow: "none" }}
      >
        <Container maxWidth>
          <Toolbar disableGutters>
            <Typography
              variant="h2"
              fontWeight="bold"
              fontFamily="Inria Sans"
              align="left"
              color="#D4FFED"
              sx={{ marginLeft: "7vh" }}
              gutterBottom
            >
              Angel.
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: "105vh",
              }}
            >
              {options.map((option) => (
                <Link to={option.url} className="link">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    key={option}
                    sx={{
                      color: "#D4FFED",
                      display: "flex",
                      fontFamily: "Inria Sans",
                      fontWeight: "bold",
                      fontSize: "4vh",
                      textTransform: "none",
                      textDecorationLine: "none",
                      marginLeft: "4vh",

                      boxShadow: "none",
                    }}
                  >
                    {option.name}
                  </Button>
                </Link>
              ))}
              {/* <Button variant="contained" color="primary" size="large" onClick={switchTheme}>Modo Oscuro</Button> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar> 
    </ThemeProvider>
  );
}
