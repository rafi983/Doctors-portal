import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Navbar from "../Navbar/Navbar";
import DentalCare from "../DentalCare/DentalCare";
import Appointment from "../Appointment/Appointment";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <DentalCare />
      <Appointment />
    </>
  );
};

export default Home;
