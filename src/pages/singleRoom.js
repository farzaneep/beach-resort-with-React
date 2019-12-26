import React , {Component} from 'react';
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Link} from 'react-router-dom';
import {RoomContext} from "../context";
import StyledHero from "../components/styledHero";

export default class SingleRoom extends
    Component{
    constructor(props){
        super(props);
        /*console.log(this.props);*/
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    /*componentDidMount() {
    }*/

    render () {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="Rooms" className="btn-primary">back to rooms</Link>
                </div>
            );
        }
        const {name, description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg, ...defaultImg] = images;

        return(
           <>
               <StyledHero img={images[0]}>
                   <Banner title={`${name} room`}>
                       <Link to="Rooms" className="btn-primary">back to rooms</Link>

                   </Banner>

               </StyledHero>
               <section className="single-room">
                   <div className="single-room-images">
                       {defaultImg.map((item, index) =>
                           ( <img key={index} src={item}/>)
                           )}
                   </div>
                   <div className="single-room-info">
                       <article className="desc">
                           <h3>description</h3>
                           <p>{description}</p>
                       </article>
                       <article className="info">
                           <h3>info</h3>
                           <h6>price : ${price}</h6>
                           <h6>size : {size} SQFT</h6>
                           <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                           <h6>{pets? "pets allowed" : "no pets allowed"}</h6>
                           <h6>{breakfast && "free breakfast included"}</h6>
                       </article>

                   </div>

               </section>
               <section className="room-extras">
                   <ul className="extras">
                       {extras.map((item,index) => (
                           <li key={index}> - {item}</li>
                       ))}
                   </ul>

               </section>
           </>
        )
    }
}