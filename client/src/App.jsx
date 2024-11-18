import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/admin-view/layout";
import AuthLayout from "./components/auth/layout";
import AdminDashboard from "./pages/admin-view/Dashboard";
import AdminFeatures from "./pages/admin-view/Features";
import AdminOrders from "./pages/admin-view/Orders";
import AdminProducts from "./pages/admin-view/Products";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
