import { Outlet } from "react-router";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = () => {
    return (
        <div className="container">
            <AdminHeader />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
