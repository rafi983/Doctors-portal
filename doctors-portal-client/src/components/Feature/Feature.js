import React from "react";
import { Grid, Typography } from "@mui/material";

const Feature = ({ feature }) => {
  const { icon, title, desc, bgColor } = feature;

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      style={{
        backgroundColor: bgColor,
        color: "#fff",
        marginBottom: "3rem",
        borderRadius: ".3rem",
      }}
    >
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <i className={icon} style={{ fontSize: "4rem" }}></i>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{desc}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Feature;
