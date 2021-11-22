import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import treatment from "../../images/treatment.png";
import { StyledButton } from "../Banner/Banner";

const DentalCare = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ alignItems: "center", mt: 5 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={treatment} width="100%" alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h3">
            Exceptional Dental <br /> Care, On Your Terms
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ my: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            dolor et minima molestiae quasi! Consectetur enim in, ipsam nostrum
            qui quod sint sit. Ad adipisci amet assumenda autem consectetur
            culpa doloribus dolorum ducimus eaque est et illo impedit labore
            laborum minima mollitia nemo, non perferendis possimus quae quidem
            quo quod reprehenderit repudiandae, similique sit sunt velit.
            Adipisci blanditiis consequuntur delectus dolor eligendi fuga
            necessitatibus, nemo nihil non quae quam quos ratione, repellat
            soluta tempora tenetur, vel veritatis. Ducimus nostrum, officiis? A
            ad aperiam consequatur dolore ducimus eveniet natus necessitatibus.
            Odit?
          </Typography>
          <StyledButton>Learn More</StyledButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalCare;
