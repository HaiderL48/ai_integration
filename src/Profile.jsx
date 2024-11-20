import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;

  return <div>{user.email}</div>;
};

export default Profile;
