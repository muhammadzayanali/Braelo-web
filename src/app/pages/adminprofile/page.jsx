import React from "react";
import AdminCard from "@/app/components/Adminprofile/AdminCard";
import BackButton from "@/app/components/BackButton";
const AdminProfile = () => {
  return (
    <>
    {/*hi*/}
      <div className="flex items-center gap-2 p-5 fixed">
        <BackButton />
      </div>
      <div>
        <AdminCard />
      </div>
      </>
  );
};

export default AdminProfile;
