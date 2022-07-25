import { useSelector } from "react-redux";
import { Loading } from "../Loading/Loading";
import { InfoBottom } from "./InfoBottom/InfoBottom";
import { InfoTop } from "./IntoTop/InfoTop";
import classes from "./Result.module.css";
export const Result = () => {
  const state = useSelector((state) => state.searchUser);
  const { loading, error, user } = state;

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return alert("mamy problem Przyjacielu 😥😥😥");
  }
  if (user) {
    return (
      <div className={classes.container}>
        <InfoTop />
        <InfoBottom />
      </div>
    );
  }
};
