"use client";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getData, postData } from "@/app/API/method";
import Image from "next/image";

const API_URL = "/admin-panel/users";
const DELETE_API_URL = "/admin-panel/user/deactivate";

export default function UserTable() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const router = useRouter();
  const toastId = useRef(null);

  const fetchUsers = async () => {
    try {
      const response = await getData(API_URL);
      setData(response.data.results || []);
    } catch (error) {
      showToast("error", "Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const showToast = (type, message) => {
    if (toastId.current) {
      toast.dismiss(toastId.current);
    }
    toastId.current = toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const confirmDelete = (user) => {
    setUserToDelete(user);
    setDeleteDialogVisible(true);
  };

  const deleteUser = async () => {
    try {
      await postData(DELETE_API_URL, { user_id: userToDelete.id });
      showToast("success", "User deleted successfully");
      fetchUsers();
    } catch (error) {
      showToast("error", "Failed to delete user");
    } finally {
      setDeleteDialogVisible(false);
      setUserToDelete(null);
    }
  };

  const hideDeleteDialog = () => {
    setDeleteDialogVisible(false);
    setUserToDelete(null);
  };

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  
  const handleViewProfile = (rowData) => {
    // Store the user data in sessionStorage
    sessionStorage.setItem('currentUserData', JSON.stringify(rowData));
    router.push('/pages/users/userdetail');
  };
  const ActionButton = (rowData) => (
    <div className="flex gap-2">
      <Image
      src="/g3.png"
      alt="profile view"
      width={24}
      height={24}
      onClick={() => handleViewProfile(rowData)} 
      className="cursor-pointer"
    />
      <Image
        src="/g2.png"
        alt="delete"
        width={24}
        height={24}
        onClick={() => confirmDelete(rowData)}
        className="cursor-pointer"
      />
    </div>
  );

  const rowCheckbox = (rowData) => {
    const isChecked = selectedRows.some((row) => row.id === rowData.id);
    return (
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleRowSelection(rowData)}
        className="cursor-pointer"
      />
    );
  };

  const headerCheckbox = () => {
    const isAllSelected = selectedRows.length === data.length && data.length > 0;
    return (
      <input
        type="checkbox"
        checked={isAllSelected}
        onChange={toggleSelectAll}
        className="cursor-pointer"
      />
    );
  };

  const toggleRowSelection = (rowData) => {
    setSelectedRows(prev =>
      prev.some(row => row.id === rowData.id)
        ? prev.filter(row => row.id !== rowData.id)
        : [...prev, rowData]
    );
  };

  const toggleSelectAll = () => {
    setSelectedRows(prev => (prev.length === data.length ? [] : [...data]));
  };

  const StatusCheck = (rowData) => {
    let statusClasses = rowData.is_active
      ? "bg-[#06B64C] text-white p-1 rounded-lg text-center"
      : "bg-[#C7233F] text-white p-1 rounded-lg text-center";
    return <div className={statusClasses}>{rowData.is_active ? "Active" : "Inactive"}</div>;
  };

  const CheckVerification = (rowData) => {
    let statusClasses = rowData.is_email_verified
      ? "text-[#5D86C2]"
      : "text-[#C7233F]";
    return <div className={statusClasses}>{rowData.is_email_verified ? "Verified" : "Unverified"}</div>;
  };

  const PhoneVerification = (rowData) => {
    let statusClasses = rowData.is_phone_verified
      ? "text-[#5D86C2]"
      : "text-[#C7233F]";
    return <div className={statusClasses}>{rowData.is_phone_verified ? "Verified" : "Unverified"}</div>;
  };

  const RoleDisplay = (rowData) => {
    const roleValue = rowData.role;
    if (typeof roleValue === 'boolean') {
      return <div>{roleValue ? "Admin" : "Client"}</div>;
    } else if (typeof roleValue === 'string') {
      return <div>{roleValue.toLowerCase() === 'admin' ? "Admin" : "Client"}</div>;
    }
    return <div>Client</div>;
  };

  const getHeaderStyle = () => ({
    backgroundColor: '#f8f9fa',
    color: '#495057',
    fontWeight: 'bold',
    padding: '1rem',
    borderBottom: '1px solid #dee2e6'
  });

  const getBodyStyle = () => ({
    padding: '1rem',
    borderBottom: '1px solid #dee2e6'
  });

  const deleteDialogFooter = (
    <div className="flex justify-end gap-3 mt-4 bg-slate-400">
      <button
        onClick={hideDeleteDialog}
        className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
      >
        Cancel
      </button>
      <button
        onClick={deleteUser}
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className="p-5">
      <ToastContainer />
      <div className="table-scroll-wrapper">
        <DataTable
          value={data}
          scrollable
          dataKey="id"
          paginator
          first={first}
          rows={rows}
          onPage={onPage}
          scrollHeight="700px"
          rowsPerPageOptions={[5, 10, 20]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          tableStyle={{ minWidth: "150rem" }}
        >
          <Column header={headerCheckbox()} body={rowCheckbox} headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Actions" body={ActionButton} headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="ID" field="id" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Email" field="email" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Google ID" field="google_id" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Apple ID" field="apple_id" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Phone Number" field="phone_number" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Full Name" field="name" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Status" body={StatusCheck} headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Email Verified" body={CheckVerification} headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Phone Verified" body={PhoneVerification} headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Date Created" field="created_at" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Last Update" field="updated_at" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
          <Column header="Role" body={RoleDisplay} headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
        </DataTable>

        <Dialog 
          visible={deleteDialogVisible}
          onHide={hideDeleteDialog}
          modal
          closable={false}
          className="rounded-xl"
          style={{ width: '400px', borderRadius: '12px', backgroundColor: '#f8f9fa' }}
          footer={deleteDialogFooter}
        >
          <div className="text-center text-lg text-gray-800 bg-slate-400 p-4 rounded-lg">
            <p>Are you sure you want to delete this user?</p>
          </div>
        </Dialog>
      </div>
    </div>
  );
}