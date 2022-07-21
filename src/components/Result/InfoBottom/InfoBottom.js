import React from "react";
import classes from "./InfoBottom.module.css";
import location from "../../../assets/icon-location.svg";
import twitter from "../../../assets/icon-twitter.svg";
import website from "../../../assets/icon-website.svg";
import company from "../../../assets/icon-company.svg";
export const InfoBottom = () => {
  return (
    <div className={classes.container}>
      <div className={classes.repos}>
        <div className={classes.repo}>
          <span className={classes.title}>Repos</span>
          <span className={classes.value}>8</span>
        </div>
        <div className={classes.followers}>
          <span className={classes.title}>Followers</span>
          <span className={classes.value}>3992</span>
        </div>
        <div className={classes.following}>
          <span className={classes.title}>Following</span>
          <span className={classes.value}>9</span>
        </div>
      </div>
      <div className={classes.containerInfo}>
        <div>
          <img src={location} alt="" />
          <span>Miasto</span>
        </div>
        <div>
          <img src={website} alt="" />
          <span>Website</span>
        </div>
        <div>
          <img src={twitter} alt="" />
          <span>Twitter</span>
        </div>
        <div>
          <img src={company} alt="" />
          <span>Company</span>
        </div>
      </div>
    </div>
  );
};
