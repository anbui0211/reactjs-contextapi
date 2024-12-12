import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

/** B1: Tạo context */
export const AppContext = createContext({});

/** B2: Tạo Provider
 * Khi chúng ta bọc provider này vào bên ngoài của bất kì component nào,
 * thì tất cả các components (con/cháu) của nó đều có thể truy xuất được vào kho dữ liệu chung (context) vừa mới tạo
 */
export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({}); // Data User
  const [isOpen, setIsOpen] = useState(false); // Open/Close Sidebar
  const [isDay, setIsDay] = useState(true); // Dark Mode

  const themeStyle = {
    day: {
      backgroundColor: "rgb(228, 228, 228)",
      color: "black",
    },
    night: {
      backgroundColor: "rgb(0, 0, 0)",
      color: "white",
    },
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then((res) => setUserData(res.data));
  }, []);

  return (
    // NOTE: Tất cả các component được bọc bỏi AppProvider sẽ đều truy xuất được vào "userData"
    <AppContext.Provider
      value={{
        userData,
        isOpen,
        setIsOpen,
        isDay,
        setIsDay,
        themeStyle: themeStyle[isDay ? "day" : "night"],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
