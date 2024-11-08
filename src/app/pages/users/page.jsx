import React from "react";
import UserDataTable from "@/app/components/Users/UserDataTable";
import UserHeader from "@/app/components/Users/UserHeader";
const Users = () => {
  return (
    <div>
      <UserHeader />
      <div>
      <UserDataTable/>
      </div>
    </div>
  );
};

export default Users;