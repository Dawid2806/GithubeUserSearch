import { useSelector, useDispatch } from "react-redux";
import { fetchUserFromGitHube } from "../store/searchSlice";

export const useUserData = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const user = state?.searchUser;

  const fetchUser = (username) => {
    dispatch(fetchUserFromGitHube(`https://api.github.com/users/${username}`));
  };
  const userData = {
    avatar: user.user?.avatar_url,
    bio: user.user?.bio,
    followers: user.user?.followers,
    following: user.user?.following,
    login: user.user?.login,
    name: user.user?.name,
    repos: user.user?.public_repos,
    createdAt: user.user?.created_at.slice(0, 10),
    location: user.user?.location,
    twitter: user.user?.twitter_username,
    company: user.user?.company,
    url: user.user?.html_url.slice(8),
  };

  return { fetchUser, userData };
};

// `https://api.github.com/users/${username}`
