import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const UserInfomation = () => {
  const { userData } = useContext(AppContext);
  return (
    <div>
      <p style={{ marginTop: "10px" }}>UserInfomation</p>
      <p>{userData.first_name}</p>
      <p>{userData.last_name}</p>
      <p>{userData.email}</p>
    </div>
  );
};

UserInfomation.propTypes = {
  userData: PropTypes.object,
};
