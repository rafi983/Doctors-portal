import React from "react";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Feature = ({ feature }) => {
  const { icon, title, desc, bgColor } = feature;

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card
        sx={{ height: "100px", py: 2 }}
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
      </Card>
    </Grid>
  );
};

export default Feature;
