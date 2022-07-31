import React, { useState } from "react";
import classes from "./SearchInput.module.css";
import search from "../../assets/icon-search.svg";
import { useUserData } from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { Error } from "../Error/Error";

export const SearchInput = () => {
  const [userName, setUserName] = useState("");
  const { fetchUser } = useUserData();
  const state = useSelector((state) => state.searchUser);
  const { loading, error, user } = state;
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const userSearchHandler = () => {
    fetchUser(userName);
    setUserName("");
  };

  return (
    <div className={classes.InputContainer}>
      <img src={search} alt="loupe" />
      <input
        className={classes.input}
        type="text"
        name="text"
        id="text"
        value={userName}
        onChange={onChangeUserName}
        placeholder="Search Github username..."
      />
      {error ? <Error /> : null}
      <button onClick={userSearchHandler} className={classes.button}>
        Search
      </button>
    </div>
  );
};
