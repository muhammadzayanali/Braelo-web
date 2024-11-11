"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getBodyStyle, getHeaderStyle } from "../Users/UserData";

export default function ReportsTable() {
  const [reports, setReports] = useState([]);
  const [first, setFirst] = useState(0); // Starting row for pagination
  const [rows, setRows] = useState(5);
  const onPage = (event) => {
    setFirst(event.first); // Update starting row for current page
    setRows(event.rows); // Update rows per page if changed
  };

  const sampleData = [
    {
      id: 1,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 2,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 3,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 4,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 5,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 6,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 7,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },

    {
      id: 8,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 9,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
    {
      id: 10,
      ReportedTo: "AIzak",
      ReportedBy: "JohnDoe",
      description: "Describe your reason in detail",
      status: "pending",
      Reason: "Offensive",
      DateCreated: "23-7-2023",
    },
  ];

  useEffect(() => {
    setReports(sampleData);
  }, [sampleData]); // Include `sampleData` if it may change

  const actionBodyTemplate = (rowData) => {
    const handleAction = (userId, action) => {
      if (action === "view") {
        // router.push("/Reportdetail"); // Next.js navigation
      } else if (action === "delete") {
        alert(`Are you sure delete this request, ${userId}`);
      }
    };

    return (
      <select
        onChange={(e) => handleAction(rowData.id, e.target.value)}
        className="border rounded-md p-1"
      >
        <option value="">Actions</option>
        <option value="view">View Detail</option>
        <option value="delete">Delete</option>
      </select>
    );
  };

  const descriptionBodyTemplate = (rowData) => (
    <input
      type="text"
      value={rowData.description}
      onChange={(e) => handleDescriptionChange(rowData.id, e.target.value)}
      className="border rounded-md p-1"
    />
  );

  const handleDescriptionChange = (id, newDescription) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, description: newDescription } : report
      )
    );
  };

  return (
    <div className="card p-5 table-scroll-wrapper">
      <DataTable
        value={reports}
        paginator
        first={first} // Controlled pagination
        rows={rows}
        onPage={onPage}
        scrollHeight="400px"
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Showing 1 to 10 of 50 entries"
        tableStyle={{ minWidth: "100rem" }}
        className="custom-paginator"
      >
        <Column
          field="id"
          header="Report ID"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="ReportedTo"
          header="Reported To"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="ReportedBy"
          header="Reported By"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="description"
          header="Description"
          body={descriptionBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="Reason"
          header="Reason"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="DateCreated"
          header="Date Created"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="status"
          header="Status"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          header="Actions"
          body={actionBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
      </DataTable>
    </div>
  );
}
