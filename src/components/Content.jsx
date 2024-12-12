import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Content = () => {
  const { isOpen, themeStyle } = useContext(AppContext);
  return (
    <div
      className="content"
      style={{
        ...themeStyle,
        padding: "10px",
        // backgroundColor: "rgb(228, 228, 228)",
        gridColumn: isOpen ? "2 / 4" : "1 /4",
      }}
    >
      Content
    </div>
  );
};

Content.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
