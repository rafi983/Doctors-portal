import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Navbar from "../Navbar/Navbar";
import DentalCare from "../DentalCare/DentalCare";
import AppointmentBanner from "../AppointmentBannner/AppointmentBanner";
import Testimonials from "../Tetimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <DentalCare />
      <AppointmentBanner />
      <Testimonials />
    </>
  );
};

export default Home;
