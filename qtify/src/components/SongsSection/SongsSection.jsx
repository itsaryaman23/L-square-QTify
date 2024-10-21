import React, {useState, useEffect} from "react";
import BasicTabs from "../Songs/Songs";
import Album from '../Album/Album';
import Carousel from '../AlbumScroll/AlbumScroll';

const SongsSection = () => {

    const url = "https://qtify-backend-labs.crio.do/songs";

    const [genre, setGenre] = useState('ALL');
    const [songsData, setSongsData] = useState([]);
    const [filteredSongsData, setFilteredSongsData] = useState([]);

    useEffect(()=>{
      fetchData();
    },[]);

    useEffect(()=>{
      filterSongs(genre);
     
    },[genre]);

    const filterSongs = (gen) => {
      if (gen !== "ALL") {
      let fData = songsData.filter((m)=>{
          return (m.genre.label.toUpperCase()==gen)
      })
        setFilteredSongsData(fData);

  
      }
      else
      {
          setFilteredSongsData(songsData);
  
      }
    }

    const fetchData = async () => {
      const res = await fetch(url);
      const d = await res.json();
      // console.log(d);
      setSongsData(d);
      setFilteredSongsData(d);
    }

    const handleClick = (e) => {
        setGenre(e.toUpperCase());
    }


  return (
    <>
      <BasicTabs setGen={handleClick} />
      {/* <Album url={url} setGenre={genre} /> */}
      <Carousel data={filteredSongsData}/>
    </>
  );

};

export default SongsSection;
