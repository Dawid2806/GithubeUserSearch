import classes from "./InfoTop.module.css";
import { useUserData } from "../../../hooks/useFetch";
export const InfoTop = () => {
  const { userData } = useUserData();
  return (
    <div className={classes.container}>
      <div className={classes.containerAvatar}>
        <img
          className={classes.containerAvatarImg}
          src={userData.avatar}
          alt=""
        />
        <div className={classes.containerText}>
          <span className={classes.title}>{userData.name}</span>
          <span className={classes.login}>@{userData.login}</span>
          <span className={classes.joined}>dołączył {userData.createdAt}</span>
        </div>
      </div>
      <br />
      <p className={classes.text}>
        {userData.bio === null ? "no Bio" : userData.bio}
      </p>
    </div>
  );
};
