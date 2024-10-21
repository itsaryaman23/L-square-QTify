import React , {useState} from "react";
import style from "./Section.module.css";
import Album from "../Album/Album";

const Section = (props) => {

    const [collapse, setCollapse] = useState("Show more");

    const handleClick = () => {
        if(collapse == 'Collapse')
        {
          props.handleClick(false);
          setCollapse('Show more');
        }
        else
        {
          props.handleClick(true);
          setCollapse('Collapse');
        }
    }


  return (
    <>
      <div className={style.body}>
        <div className={style.textContainer}>
          <h5 class={style.heading}>{props.title}</h5>
          {
            props.collapse &&
            (<a className={style.collapse} onClick={handleClick}>
              {collapse}
            </a>)
          }
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </>
  );
};
export default Section;
