
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./slide.css";

import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Slider() {
    return (
    <>
    <Swiper spaceBetween={0} centeredSlides={true} autoplay={{
  "delay": 1500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={false} className="mySwiper">
  <SwiperSlide>
      <img src={`https://s3.ap-south-1.amazonaws.com/images.saveo.in/GST-Price-Drop_Final.gif`} style={{ listStyle: 'none' }} alt="price drop"/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={`https://s3.ap-south-1.amazonaws.com/images.saveo.in/Generic+Sale+Top+Banner.jpeg`} style={{ listStyle: 'none' }} alt="price drop"/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={`https://s3.ap-south-1.amazonaws.com/images.saveo.in/Azicip-500mg_Banner.jpg`} style={{ listStyle: 'none' }} alt="price drop"/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={`https://s3.ap-south-1.amazonaws.com/images.saveo.in/Zystus_App_Banner_New.jpg`} style={{ listStyle: 'none' }} alt="price drop"/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={`https://s3.ap-south-1.amazonaws.com/images.saveo.in/Corona_Banner.jpg`} style={{ listStyle: 'none' }} alt="price drop"/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={`https://s3.ap-south-1.amazonaws.com/images.saveo.in/Manmatter_Live_Banner_rev.gif`} style={{ listStyle: 'none' }} alt="price drop"/>
    </SwiperSlide>
  </Swiper>
    </>
  )
}
