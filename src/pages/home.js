import React from 'react';
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
export default  function Home() {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at 299$" >
                    <Link to="/Rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )

};