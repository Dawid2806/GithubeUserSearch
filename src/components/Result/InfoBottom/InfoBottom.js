import classes from "./InfoBottom.module.css";
import location from "../../../assets/icon-location.svg";
import twitter from "../../../assets/icon-twitter.svg";
import website from "../../../assets/icon-website.svg";
import company from "../../../assets/icon-company.svg";
import { useUserData } from "../../../hooks/useFetch";

export const InfoBottom = () => {
  const { userData } = useUserData();

  return (
    <div className={classes.container}>
      <div className={classes.repos}>
        <div className={classes.repo}>
          <span className={classes.title}>Repos</span>
          <span className={classes.value}>{userData.repos}</span>
        </div>
        <div className={classes.followers}>
          <span className={classes.title}>Followers</span>
          <span className={classes.value}>{userData.followers}</span>
        </div>
        <div className={classes.following}>
          <span className={classes.title}>Following</span>
          <span className={classes.value}>{userData.following}</span>
        </div>
      </div>
      <div className={classes.containerInfo}>
        <div className={classes.info}>
          <img src={location} alt="" />
          <span>
            {userData.location === null ? "Brak danych" : userData.location}
          </span>
        </div>
        <div className={classes.info}>
          <img src={website} alt="" />
          <span>{userData.url === null ? "Brak danych" : userData.url}</span>
        </div>
        <div className={classes.info}>
          <img src={twitter} alt="" />
          <span>
            {userData.twitter === null ? "Brak danych" : userData.twitter}
          </span>
        </div>
        <div className={classes.info}>
          <img src={company} alt="" />
          <span>
            {userData.company === null ? "Brak danych" : userData.company}
          </span>
        </div>
      </div>
    </div>
  );
};
