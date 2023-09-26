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
          margin: "7.5vh",
        }}
      >
        <Card
          sx={{
            maxWidth: "73vh",
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
              color="#D4FFED"
              sx={{}}
            >
              Hola, Soy Angel Soto
            </Typography>
            <br></br>
            <Typography
              variant="h2"
              fontWeight="bold"
              fontFamily="Inria Sans"
              color="#009FE4"
              gutterBottom
            >
              Full-stack Developer
            </Typography>
            <br></br>
            <Typography
              variant="h4"
              fontWeight="regular"
              fontFamily="Inria Sans"
              color="#ffffff"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas quis ipsum suspendisse ultrices gravida.
            </Typography>
            <br></br>
            <Boton />
          </CardContent>
        </Card>
        <Socials />
      </Container>
    </>
  );
}
