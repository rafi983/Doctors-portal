import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography } from "@mui/material";

const Review = ({ singleReview }) => {
  const { img, name, location, review } = singleReview;
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ mt: 5 }}>
      <Card sx={{ height: "280px", padding: "3rem 2rem" }}>
        <Typography variant="body2" color="text.secondary">
          {review}
        </Typography>

        <Grid
          container
          spacing={2}
          style={{ marginTop: "3rem", alignItems: "center" }}
        >
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <CardMedia
              component="img"
              style={{ width: "auto", height: "80px", margin: "0 auto" }}
              image={img}
              alt="green iguana"
            />
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: 500 }}
                style={{ color: "#00cec9" }}
              >
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Review;
