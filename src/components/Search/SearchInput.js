import React from "react";
import classes from "./SearchInput.module.css";
import search from "../../assets/icon-search.svg";
export const SearchInput = () => {
  return (
    <div className={classes.InputContainer}>
      <img src={search} alt="loupe" />
      <input
        className={classes.input}
        type="text"
        name="text"
        id="text"
        placeholder="Search Github username..."
      />
      <button className={classes.button}>Search</button>
    </div>
  );
};
