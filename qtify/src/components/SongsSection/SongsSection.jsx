import React, {useState} from "react";
import BasicTabs from "../Songs/Songs";
import Album from '../Album/Album';

const SongsSection = () => {

    const url = "https://qtify-backend-labs.crio.do/songs";

    const [genre, setGenre] = useState('ALL');

    const handleClick = (e) => {
        setGenre(e.toUpperCase());
    }

  return (
    <>
      <BasicTabs setGen={handleClick} />
      <Album url={url} setGenre={genre} />
    </>
  );

};

export default SongsSection;
