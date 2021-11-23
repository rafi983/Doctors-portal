import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import doctor from "../../images/doctor.png";
import { StyledButton } from "../Banner/Banner";
import appointmentBg from "../../images/appointment-bg.png";

const appointmentBanner = {
  background: `url(${appointmentBg})`,
  backgroundPosition: "center",
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1, my: 5 }}>
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center", mt: 5 }}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <img
              src={doctor}
              style={{ marginBottom: "-.3rem" }}
              width="100%"
              alt=""
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography variant="h5" sx={{ color: "#00cec9", fontWeight: 500 }}>
              Appointment
            </Typography>
            <Typography
              variant="h2"
              sx={{ my: 2, fontWeight: 600, color: "#fff" }}
            >
              Make an Appointment Today
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              animi atque culpa cum doloribus eveniet exercitationem ipsa ipsum,
              iure nobis numquam quam quia quos repudiandae?
            </Typography>
            <StyledButton>Learn More</StyledButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
