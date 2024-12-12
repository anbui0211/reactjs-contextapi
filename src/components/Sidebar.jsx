import { useContext } from "react";
import { UserInfomation } from "./UserInfomation";
import PropTypes from "prop-types";
import { AppContext } from "../context/AppContext";

export const Sidebar = () => {
  const { isOpen, themeStyle } = useContext(AppContext);
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="sidebar"
      style={{
        ...themeStyle,
        // backgroundColor: "rgb(228, 228, 228)",
        padding: 10,
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      }}
    >
      Sidebar
      <UserInfomation />
    </div>
  );
};

Sidebar.propTypes = {
  userData: PropTypes.object,
};
