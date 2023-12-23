import React from 'react';
import NavBar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Project from '../Project/Project';
import Team from '../Team/Team';
import RisingStars from '../RisingStars/RisingStars';
import Footer from '../Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
      <div className="font-inter ">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Project />
        <Team/>
        <RisingStars />
        <Testimonial /> 
      </div>
    );
};

export default Home;