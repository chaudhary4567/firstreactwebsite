import React from 'react';
import Navbar from "../inc/Navbar";
import Header from "../inc/Header";
import Howitwork from "../inc/Howitwork";
import Aboutus from "../inc/Aboutus";
import Howtosend from "../inc/Howtosend";
import Contactus from "../inc/Contactus";
import Footer from "../inc/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
      		<Header />
      		<Howitwork />
      		<Aboutus />
      		<Howtosend />
      		<Contactus />
      		<Footer />
		</>
	)
}

export default Home;