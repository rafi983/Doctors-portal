import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import chair from "../../images/chair.png";
import "./Banner.css";

const StyledButton = styled.button`
  background-image: linear-gradient(to right, #55efc4, #00cec9);
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  padding: 0.7rem 1.1rem;
  margin-top: 1.3rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "550px",
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h2" sx={{ fontWeight: 400 }}>
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores aut beatae delectus eius explicabo impedit in ipsa
              minus mollitia? Architecto.
            </Typography>
            <StyledButton>Get Appointment</StyledButton>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={chair} width="100%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
