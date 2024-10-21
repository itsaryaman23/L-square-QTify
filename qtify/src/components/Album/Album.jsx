import React, { useState, useEffect } from "react";
import Mycard from "../Mycard/Mycard";
import style from "./Album.module.css";
import Carousel from '../AlbumScroll/AlbumScroll';


const Album = ({ url, expand}) => {
  const [filteredData, setFilteredData] = useState([]);

  console.log(expand);

  useEffect(() => {
     fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(url);
    let d = await res.json();
    setFilteredData(d);
    return d;
  };

  return (
    <div className={style.body}>
      {
        expand?
        (<><div class={style.alb}>
          {filteredData.map((m) => {
            return (
              <Mycard
                name={m.title}
                follow={m.follows ? m.follows : m.likes}
                isFollow={m.follows ? true : false}
                key={m.id}
                img={m.image}
              />
            );
          })}
        </div></>) : (<><Carousel data={filteredData} /></>)
      }
      
    </div>
  );
};

export default Album;

