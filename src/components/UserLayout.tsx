import { Outlet } from "react-router";
import UserHeader from "../layouts/UserHeader";

const UserLayout = () => {
  return (
    <div className="container">
      <UserHeader />
      <Outlet />
    </div>
  );
};

export default UserLayout;
