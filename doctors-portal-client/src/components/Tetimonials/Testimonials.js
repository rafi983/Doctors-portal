import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Review from "../Review/Review";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container>
      <Typography variant="h3" style={{ color: "#00cec9" }}>
        Testimonials
      </Typography>
      <Typography
        variant="h4"
        style={{ fontWeight: 600, marginTop: ".5rem", fontSize: "3.5rem" }}
      >
        What's Our Patients <br /> Says
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {reviews?.map((review) => (
          <Review key={review?._id} singleReview={review}></Review>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
