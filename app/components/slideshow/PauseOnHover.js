"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };

    const boxes = [1, 2, 3, 4, 5, 6];


    return (
      <div>
      <Slider {...settings}>
        {boxes.map((boxNumber) => (
          <div key={boxNumber}>
            <div className="colored-box bg-gray-500 text-white h-[50vh] w-90 m-10 p-2 rounded-md px-5 items-center flex flex-col justify-center space-y-5">
              <div>{boxNumber}</div>
              <h1 className="text-2xl md:text-3xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eum!</h1>
              <div>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
  }
}