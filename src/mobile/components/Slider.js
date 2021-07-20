import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';


function Slider() {
    const slides = [];

    for(let i = 0; i < 5; i+=1){
        slides.push(
            <SwiperSlide key = {`slide=${i}` }>
                <img src={`https://picsum.photos/id/${i+1}/500/300`} alt={`slide ${i}`} />
            </SwiperSlide>
        );
    }

    return <React.Fragment>
        <Swiper id="main">
            {slides}
        </Swiper>
    </React.Fragment>
}

export default Slider;