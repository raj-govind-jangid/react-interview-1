import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../commonFunction/commonFunction";

function UserProtect({children}) {
  var userType = getUser() == 'user';
  return userType ? children: <Navigate to="/login" />
}

export default UserProtect;