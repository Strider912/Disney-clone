import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (

        <Carousel {...settings} >
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
        </Carousel>

    )
}

export default ImgSlider

const  Carousel= styled(Slider)`
margin-top: 30px;

ul li button{
    &:before{
        font-size: 15px;
        color: white;
    }
}

li.slick-active button:before{
    color: white;
}

.slick-list{
    overflow: visible;
}

button{
    z-index: 1;
}
`
const Wrap=styled.div`
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    border: 5px solid transparent;
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
}
`