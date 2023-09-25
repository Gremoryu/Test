import React from 'react'
import { Box, Toolbar, Button } from "@mui/material";
import { AppBar, Container, Typography } from "@mui/material";

const options = ["Home", "Portfolio"];

export default function Nav() {
  return (
    <AppBar
      position="fixed"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth>
        <Toolbar disableGutters>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontFamily="Inria Sans"
            align="left"
            color="#D4FFED"
            sx={{ marginLeft: "10vh", marginTop: "2vh" }}
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
              <Button
                key={option}
                sx={{
                  color: "#D4FFED",
                  display: "block",
                  fontFamily: "Inria Sans",
                  fontWeight: "bold",
                  fontSize: "4vh",
                  marginLeft: "5vh",
                }}
              >
                {option}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
