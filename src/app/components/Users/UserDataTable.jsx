"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UserData } from "./UserData";
import { getHeaderStyle } from "./UserData";
import { getBodyStyle } from "./UserData";
import Link from "next/link";
import Image from "next/image";
import Modal from "../Modal";
export default function UserDataTable() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setData(UserData);
  }, []);

  const ActionButton = () => (
    <div className="flex gap-2">
      <Link href="/pages/users/userdetail">
        <Image src="/g3.png" alt="profile view" width={24} height={24} className="cursor-pointer"/>
      </Link>
      <Image src="/g2.png" alt="delete" width={24} height={24} onClick={openModal} className="cursor-pointer" />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc="/delete.png"
        text="Are you sure you want to delete this User?"
        label1="Yes, I do"
        label2="Cancel"
      />
    </div>
  );

  // Checkbox for selecting individual rows
  const rowCheckbox = (rowData) => {
    const isChecked = selectedRows.some((row) => row.ID === rowData.ID);
    return (
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleRowSelection(rowData)}
      />
    );
  };

  // Toggle row selection
  const toggleRowSelection = (rowData) => {
    if (selectedRows.some((row) => row.ID === rowData.ID)) {
      setSelectedRows(selectedRows.filter((row) => row.ID !== rowData.ID));
    } else {
      setSelectedRows([...selectedRows, rowData]);
    }
  };

  // Header checkbox for selecting all rows
  const headerCheckbox = () => {
    const isAllSelected = selectedRows.length === data.length;
    return (
      <input
        type="checkbox"
        checked={isAllSelected}
        onChange={toggleSelectAll}
      />
    );
  };

  // Toggle select all rows
  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]); // Deselect all
    } else {
      setSelectedRows(data); // Select all
    }
  };

  const StatusCheck = (rowData) => {
    let statusClasses;
    switch (rowData.Status) {
      case "Active":
        statusClasses = "bg-[#06B64C] text-white p-1 rounded-lg text-center";
        break;
      case "Deleted":
        statusClasses = "bg-[#C7233F] text-white p-1 rounded-lg text-center";
        break;
      case "Inactive":
        statusClasses = "bg-[#FFCC35] text-white p-1 rounded-lg text-center";
        break;
      default:
        statusClasses = "py-1 px-2 rounded";
    }
    return <div className={statusClasses}>{rowData.Status}</div>;
  };

  // Email verification status check
  const CheckVerification = (rowData) => {
    let statusClasses;
    switch (rowData.EmailVerified) {
      case "Verified":
        statusClasses = "text-[#5D86C2]";
        break;
      case "Unverified":
        statusClasses = "text-[#C7233F]";
        break;
    }
    return <div className={statusClasses}>{rowData.EmailVerified}</div>;
  };

  // Phone verification status check
  const PhoneVerification = (rowData) => {
    let statusClasses;
    switch (rowData.PhoneVerified) {
      case "Verified":
        statusClasses = "text-[#5D86C2]";
        break;
      case "Unverified":
        statusClasses = "text-[#C7233F]";
        break;
    }
    return <div className={statusClasses}>{rowData.PhoneVerified}</div>;
  };

  const HeaderIcon = () => {
    return (
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 1.5V10.4999"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.99996 9L2.49998 10.5L1 9"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 10.4999V1.5"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.99996 2.99998L7.49998 1.5L6 2.99998"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderHeader = (label, Icon) => (
    <div className="flex items-center gap-2">
      <span>{label}</span>
      <Icon />
    </div>
  );

  // Rendering the table
  return (
    <div className="p-5">
      <div className="">
        <DataTable
          value={data}
          scrollable
          dataKey="ID"
          paginator
          rows={20}
          rowsPerPageOptions={[5, 10, 20]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing 1 to 10 of 50 entries"
          tableStyle={{ minWidth: "200rem" }}
        >
          <Column
            header={headerCheckbox()}
            body={rowCheckbox}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Actions", HeaderIcon)}
            body={ActionButton}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("ID", HeaderIcon)}
            field="ID"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Email", HeaderIcon)}
            field="Email"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Google ID"
            header={renderHeader("Google ID", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Apple ID"
            header={renderHeader("Apple ID", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Phone Number"
            header={renderHeader("Phone Number", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Full Name"
            header={renderHeader("Full Name", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Password"
            header={renderHeader("Password", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Status"
            header={renderHeader("Status", HeaderIcon)}
            body={StatusCheck}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="EmailVerified"
            header={renderHeader("Email Verified", HeaderIcon)}
            body={CheckVerification}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="PhoneVerified"
            header={renderHeader("Phone Verified", HeaderIcon)}
            body={PhoneVerification}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Date Created"
            header={renderHeader("Date Created", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Last Update"
            header={renderHeader("Last Update", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Role"
            header={renderHeader("Role", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="OTP"
            header={renderHeader("OTP", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Device Token"
            header={renderHeader("Device Token", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            field="Total Listings"
            header={renderHeader("Total Listings", HeaderIcon)}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
        </DataTable>
      </div>
    </div>
  );
}
