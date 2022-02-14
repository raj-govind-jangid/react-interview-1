import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../commonFunction/commonFunction";

function UnProtectedRoute({children}) {
  var userType = getUser();
  return userType == 'admin' ? <Navigate to="/admin" /> : userType == 'user' ? <Navigate to="/user" /> : children 
}

export default UnProtectedRoute;