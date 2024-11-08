"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { getBodyStyle, getHeaderStyle } from "../Users/UserData";

export default function ReportsTable() {
  const [reports, setReports] = useState([]);
  const router = useRouter();

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
  }, []);

  const actionBodyTemplate = (rowData) => {
    const handleAction = (userId, action) => {
      if (action === "view") {
        // router.push("/Reportdetail"); // Next.js navigation
      } else if (action === "delete") {
        console.log(`Deleting user with ID: ${userId}`);
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
    <div className="card p-5">
      <DataTable
        value={reports}
        tableStyle={{ minWidth: "100rem" }}
        paginator
        rows={5}
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
