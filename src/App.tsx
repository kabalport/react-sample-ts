import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./components/UserLayout";
import About from "./pages/user/About";

import NotFound from "./pages/common/NotFound";
import AdminLayout from "./layouts/AdminLayout";
import AdminManage from "./pages/admin/MemberManage/AdminManage";
import AdminDashboardPage from "./pages/admin/AdminDashboard/AdminDashboardPage";



import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";



const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<About />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="/admin/member/manage" element={<AdminManage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};

export default App;
