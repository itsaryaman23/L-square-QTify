import React from 'react';
import styles from './FeedbackButton.module.css';


const FeedbackButton = ({handleClick})=>{
    return (
        <button class={styles.btn} onClick = {handleClick}>Give Feedback</button>
    );
}

export default FeedbackButton;