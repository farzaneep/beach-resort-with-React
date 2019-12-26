import React from 'react';
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Link} from 'react-router-dom';
import RoomsContainer from "../components/roomsContainer";

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    )
};
export default Rooms;