import React, { useState, useEffect } from "react";
import Mycard from "../Mycard/Mycard";
import style from "./Album.module.css";


const Album = ({ url, setGenre }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
     fetchData();
    // filterSongs(setGenre);
  }, []);
  useEffect(()=>{
    filterSongs(setGenre);
  },[setGenre]);

  const fetchData = async () => {
    const res = await fetch(url);
    let d = await res.json();
    setData(d);
    setFilteredData(d);
  };


  const filterSongs = (genre) => {
    if (genre !== "ALL" && genre) {
    let fData = data.filter((m)=>{
        return (m.genre.label.toUpperCase()==genre)
    })
      setFilteredData(fData);
    }
    else
    setFilteredData(data);
  };

  return (
    <div className={style.body}>
      <div class={style.alb}>
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
      </div>
    </div>
  );
};

export default Album;
