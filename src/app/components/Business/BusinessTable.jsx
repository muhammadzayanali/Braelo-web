"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { BusniessData } from "./BusinessData";
import { getHeaderStyle } from "../Users/UserData";
import { getBodyStyle } from "../Users/UserData";
import Link from "next/link";
import Image from "next/image";
import Modal from "../Modal";

export default function BussniessTable() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [first, setFirst] = useState(0); // Starting row for pagination
  const [rows, setRows] = useState(5);
  const onPage = (event) => {
    setFirst(event.first); // Update starting row for current page
    setRows(event.rows); // Update rows per page if changed
  };

  useEffect(() => {
    setData(BusniessData);
  }, []);

  const statusCheck = (rowData) => {
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

  const actionButton = () => (
    <div className="flex gap-2 cursor-pointer">
      <Link href="/pages/business/businessdetail">
        <Image src="/g3.png" alt="profile view" width={24} height={24} />
      </Link>
      <Image
        src="/g2.png"
        alt="delete"
        width={24}
        height={24}
        onClick={openModal}
      />
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

  // Header checkbox to select/deselect all rows
  const headerCheckbox = () => {
    const isAllSelected = data.length && selectedData.length === data.length;

    const toggleSelectAll = () => {
      if (isAllSelected) {
        setSelectedData([]); // Deselect all if all are currently selected
      } else {
        setSelectedData(data.map((item) => item.ID)); // Select all by mapping IDs
      }
    };

    return (
      <input
        type="checkbox"
        checked={isAllSelected} // Check if all are selected
        onChange={toggleSelectAll} // Toggle select/deselect all
        className="form-checkbox"
      />
    );
  };

  // Function to handle individual row selection
  const toggleRowSelection = (rowData) => {
    const isSelected = selectedData.includes(rowData.ID); // Check if the current row is selected
    console.log("Toggling selection for ID,"(rowData.ID));
    setSelectedData((prevSelected) => {
      if (isSelected) {
        // If already selected, remove it from the selected data
        return prevSelected.filter((id) => id !== rowData.ID);
      } else {
        // If not selected, add it to the selected data
        return [...prevSelected, rowData.ID];
      }
    });
  };

  // Checkbox for each individual row
  const rowCheckbox = (rowData) => {
    const isSelected = selectedData.includes(rowData.ID); // Check if the current row is selected

    return (
      <input
        type="checkbox"
        checked={isSelected} // Check the checkbox if the row is selected
        onChange={() => toggleRowSelection(rowData)} // Toggle selection for this row
        className="form-checkbox"
      />
    );
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

  const ImageLogo = () => {
    return (
      <div>
        <Image src="/b5.png" alt="logo" width={30} height={30} />
      </div>
    );
  };

  return (
    <div className="p-5 table-scroll-wrapper">
        <DataTable
          value={data}
          dataKey="ID"
          paginator
          first={first} // Controlled pagination
          rows={rows}
          onPage={onPage}
          scrollHeight="400px"
          rowsPerPageOptions={[5, 10, 20]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing 1 to 10 of 50 entries"
          tableStyle={{ minWidth: "200rem" }}
          className="custom-paginator" 
          
        >
          <Column
            header={headerCheckbox()}
            body={rowCheckbox}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Actions", HeaderIcon)}
            body={actionButton}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Logo", HeaderIcon)}
            field={ImageLogo}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          ></Column>
          <Column
            header={renderHeader("Business Name", HeaderIcon)}
            field="BusinessName"
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
            header={renderHeader("Full Name", HeaderIcon)}
            field="Full Name"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Phone Number", HeaderIcon)}
            field="Phone Number"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Website", HeaderIcon)}
            field="website"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Business Type", HeaderIcon)}
            field="BusinessType"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Password", HeaderIcon)}
            field="Password"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Status", HeaderIcon)}
            body={statusCheck}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Email Verified", HeaderIcon)}
            body={(rowData) => (
              <div
                className={
                  rowData.EmailVerified === "Verified"
                    ? "text-[#5D86C2]"
                    : "text-[#C7233F]"
                }
              >
                {rowData.EmailVerified}
              </div>
            )}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Phone Verified", HeaderIcon)}
            body={(rowData) => (
              <div
                className={
                  rowData.PhoneVerified === "Verified"
                    ? "text-[#5D86C2]"
                    : "text-[#C7233F]"
                }
              >
                {rowData.PhoneVerified}
              </div>
            )}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Date Create", HeaderIcon)}
            field="Date Created"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Last Update", HeaderIcon)}
            field="Last Update"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Role", HeaderIcon)}
            field="Role"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("OTP", HeaderIcon)}
            field="OTP"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
        </DataTable>
      </div>
  );
}
