import React from "react";
import UserContext from "./userContext";

import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
