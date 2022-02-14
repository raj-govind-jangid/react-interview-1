import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminAddProduct from '../components/admin/AdminAddProduct.js';
import AdminDashboard from '../components/admin/AdminDashboard.js';
import AdminEditProduct from '../components/admin/AdminEditProduct.js';
import AdminProductList from '../components/admin/AdminProductList.js';
import Error404 from '../components/common/Error404.js';
import Login from '../components/common/Login.js'
import LoginLayout from '../components/common/LoginLayout.js';
import Register from '../components/common/Register.js';
import UserCard from '../components/user/UserCard.js';
import UserDashboard from '../components/user/UserDashboard.js';
import UserOrder from '../components/user/UserOrder.js';
import UserProductList from '../components/user/UserProductList.js';
import UserProductView from '../components/user/UserProductView.js';
import AdminProtect from './AdminProtect.js';
import UnProtectedRoute from './UnProtectedRoute.js';
import UserProtect from './UserProtect.js';

export default function RouterList() {
  return(
    <>
    <Routes>
        <Route element={<LoginLayout/>}>  
        <Route path="/login" element={<UnProtectedRoute><Login/></UnProtectedRoute>} />
        <Route path="/register" element={<UnProtectedRoute><Register/></UnProtectedRoute>} />
        </Route>
        <Route element={<AdminDashboard/>}>
        <Route path="/admin" element={<AdminProtect><AdminProductList/></AdminProtect>} />
        <Route path="/admin/addproduct" element={<AdminProtect><AdminAddProduct/></AdminProtect>} />
        <Route path="/admin/editproduct/:id" element={<AdminProtect><AdminEditProduct/></AdminProtect>} />
        </Route>
        <Route element={<UserDashboard/>}>
        <Route path="/user" element={<UserProtect><UserProductList/></UserProtect>} />
        <Route path="/user/card" element={<UserProtect><UserCard/></UserProtect>} />
        <Route path="/user/order" element={<UserProtect><UserOrder/></UserProtect>} />
        <Route path="/user/view/:id" element={<UserProtect><UserProductView/></UserProtect>} />
        </Route>

        <Route path="*" element={<Error404/>}></Route>
        <Route path="/" element={<Navigate to={'/login'}/>}></Route>
    </Routes>
    </>
  );
}
