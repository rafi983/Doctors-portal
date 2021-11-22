import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mt: 3, color: "#00cec9", fontWeight: 500 }}
      >
        Our Services
      </Typography>

      <Typography
        variant="h2"
        sx={{ textAlign: "center", mt: 3, fontWeight: 600 }}
      >
        Services We Provide
      </Typography>

      <Grid container spacing={2}>
        {services?.map((service) => (
          <Service key={service?._id} service={service}></Service>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
