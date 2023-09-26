import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Boton from "../atomos/button";
import Socials from "../atomos/socials";

export default function Cardhome() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          marginLeft: "5vh",
          marginTop: "10vh",
        }}
      >
        <Card
          sx={{
            maxWidth: "85vh",
            maxHeight: "60vh",
            background: "transparent",
            boxShadow: "none",
            textAlign: "justify",
          }}
        >
          <CardContent>
            <Typography
              variant="h1"
              fontWeight="bold"
              fontFamily="Inria Sans"
              fontSize="9vh"
              color="#D4FFED"
            >
              Hola, Soy Angel Soto
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              fontFamily="Inria Sans"
              fontSize="7vh"
              color="#009FE4"
            >
              Full-stack Developer
            </Typography>
            <br></br>
            <Typography
              variant="p"
              fontWeight="regular"
              fontSize="3.5vh"
              fontFamily="Inria Sans"
              color="#ffffff"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas quis ipsum suspendisse ultrices gravida.
            </Typography>
            <br></br>
            <br></br>
            <Boton />
          </CardContent>
        </Card>
        <br />
        <br />

        <Socials />
      </Container>
    </>
  );
}
