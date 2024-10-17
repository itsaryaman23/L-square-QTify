import React,{useState} from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
// import Hero from "../Hero/Hero";
import Feedback from '../Feedback/Feedback'

const Navbar = () => {
  const [feedDisplay, setFeedDisplay] = useState(false);
  const handleClick = () =>{
    if(feedDisplay)
      setFeedDisplay(false);
    else
      setFeedDisplay(true);
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <div>
            <Logo />
          </div>
          <div>
            <Search />
          </div>
          <div>
            <FeedbackButton handleClick = {handleClick}/>
          </div>
        </div>
      </div>
      {/* <Hero /> */}
      {
        feedDisplay &&
        <Feedback handleCross = {handleClick}/>
      }
    </>
  );
};

export default Navbar;
