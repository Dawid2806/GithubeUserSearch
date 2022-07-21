import React from "react";
import { InfoBottom } from "./InfoBottom/InfoBottom";
import { InfoTop } from "./IntoTop/InfoTop";
import classes from "./Result.module.css";
export const Result = () => {
  return (
    <div className={classes.container}>
      <InfoTop />
      <InfoBottom />
    </div>
  );
};
