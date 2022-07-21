import React from "react";
import classes from "./InfoTop.module.css";
import avatar from "../../../assets/71017787_2450665411686069_5962383933722066944_n.jpg";
export const InfoTop = () => {
  return (
    <div className={classes.container}>
      <div className={classes.containerAvatar}>
        <img className={classes.containerAvatarImg} src={avatar} alt="" />
      </div>
      <div className={classes.containerText}>
        <span className={classes.title}>Nazwa</span>
        <span className={classes.email}>Email</span>
        <span className={classes.joined}>dołączył 22 22 22</span>
      </div>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        debitis nostrum doloribus eius iste in quasi, dignissimos quos
        cupiditate magnam?
      </p>
    </div>
  );
};
