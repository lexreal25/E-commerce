import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import './App.css';

class Slides extends Component {
    render() {
        {/*creating an array of images */ }
        var images = [
            { img: 'assets/nice.jpg' },
            { img: 'assets/nice2.jpg' },
            { img: 'assets/nice3.jpg' }
        ];

        {/*Declaring a function to loop through the images */ }

        var imgSlides = () => images.map(num => (
            <div>
                <img  src={num.img} width="100%" />
            </div>
        ));

        return (
            <>
                <Slider
                    dots={true}
                    slidsToShow={2}
                    slidesToScroll={2}
                    autoplay={true}
                    arrows={true}
                    transition={500}
                    autoplaySpeed={4000}>{imgSlides()}
                </Slider>
            </>
        );
    }
}

   export default Slides