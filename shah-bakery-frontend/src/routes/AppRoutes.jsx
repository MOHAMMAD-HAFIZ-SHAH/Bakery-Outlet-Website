import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile";
import Offers from "../pages/Offers/Offers";
import OutletSelection from "../pages/OutletSelection/OutletSelection";
import OrderTracking from "../pages/OrderTracking/OrderTracking";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../pages/Admin/Dashboard";
import MenuManagement from "../pages/Admin/MenuManagement";
import AdminLogin from "../pages/Admin/AdminLogin";

import AdminProtectedRoute from "../pages/Admin/AdminProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/offers" element={<Offers />} />

        <Route path="/outlets" element={<OutletSelection />} />

        <Route path="/tracking" element={<OrderTracking />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/secure-admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/menu"
          element={
            <AdminProtectedRoute>
              <MenuManagement />
            </AdminProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;