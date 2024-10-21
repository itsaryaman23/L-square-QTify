import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Mycard from "../Mycard/Mycard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Carousel({ data }) {

  // console.log("inside carousel",data);

  const [localData, setLocalData ] = useState([]);

  useEffect(()=>{
    if(data)
    setLocalData(data);
  },[data]);

  return (
    <>
       <Swiper
       slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {localData.map((m) => {
          return (
            <SwiperSlide>
              <Mycard
                name={m.title}
                follow={m.follows ? m.follows : m.likes}
                isFollow={m.follows ? true : false}
                key={m.id}
                img={m.image}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
