import React from 'react';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
// import art from '../../assets/album-art.svg';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import style from './Mycard.module.css';

const Mycard = ({name, follow, img, isFollow}) => {
let follower;
if(isFollow)
{
  follower = `${follow} Follows`;
}
else
{
  follower = `${follow} Likes`;
}
    return (
        <>
        <div className = {style.card} >
          <div className = {style.art}>
            <img className = {style.img} src={img} alt="album art" />
          </div>
          <div className = {style.content}>
            <Chip id={style.chip} label= {follower} />
          </div>
        <p className = {style.albumName}>{name}</p>
        </div>
        </>
    );
}

export default Mycard;