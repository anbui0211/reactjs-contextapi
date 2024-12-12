import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Header = () => {
  const { userData, isOpen, setIsOpen, themeStyle, isDay, setIsDay } =
    useContext(AppContext);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  return (
    <div
      className="header"
      style={{
        ...themeStyle,
        display: "flex",
        justifyContent: "right",
        // backgroundColor: "rgb(228, 228, 228)",
        padding: "10px",
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        gridRow: "1 / 2",
      }}
    >
      <p>
        Hello! {userData.first_name} {userData.last_name}
      </p>
      <p
        style={{ cursor: "pointer", marginLeft: "5px" }}
        onClick={toggleSidebar}
      >
        My profile
      </p>

      <label className="label" style={{ marginLeft: "5px" }}>
        <input type="checkbox" checked={isDay} onChange={toggleTheme} />
        <spann className="slider">Dark mode</spann>
      </label>
    </div>
  );
};

Header.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  userData: PropTypes.object,
};
