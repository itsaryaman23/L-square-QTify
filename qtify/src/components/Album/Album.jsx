import React, {useState, useEffect} from 'react';
import Mycard from '../Mycard/Mycard';
import style from './Album.module.css';

const axios = require('axios');

const Album = ({url}) => {

    const [alb, setAlb] = useState([]);

    useEffect(()=>{
        testFunc();
    },[])

    const testFunc = async () => {
        const res = await fetch(url);
        const data = await res.json();
        // return data;
        // console.log(data);
        setAlb(data);
    }
    console.log("fetched data",alb);
    return (
        <div className={style.body}>
        {/* <div className={style.textContainer}>
          <h5 class={style.heading}>Top Albums</h5>
          <a className={style.collapse}>Collapse</a>
        </div> */}
        <div class = {style.alb}>
        {/* <Mycard name={"Dummy"} follow={100}/> */}
        {
            alb.map((m)=>{
                return <Mycard name={m.title} follow={m.follows} key={m.id} img={m.image}/>
            })
        }
        </div>
      </div>
    );
}

export default Album;