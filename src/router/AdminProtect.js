import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../commonFunction/commonFunction";

function AdminProtect({children}) {
  var userType = getUser() == 'admin';
  return userType ? children: <Navigate to="/login" />
}

export default AdminProtect;