import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button"; // Import Button component
import { getBodyStyle, getHeaderStyle } from "../Users/UserData";
import { getData } from "@/app/API/method";

export default function ReportsTable() {
  const [reports, setReports] = useState([]);
  const [first, setFirst] = useState(0); // Starting row for pagination
  const [rows, setRows] = useState(5);
  const [selectedReport, setSelectedReport] = useState(null); // State to hold the selected report for the modal
  const [isModalVisible, setModalVisible] = useState(false); // State to control modal visibility

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
    const fetchReports = async () => {
      try {
        const data = await getData("/admin-panel/report/action");
        console.log("API Response:", data);
        
        if (data?.data?.results) {
          const formattedReports = data.data.results.map((report, index) => ({
            id: report.id || index + 1,
            ReportedTo: report.reported_to_user || "No Title",
            ReportedBy: report.reported_by_user || "No Message",
            description: report.issue_description || "No Description",
            status: report.status || "Pending",
            Reason: report.Reason || "No Reason",
            DateCreated: report.DateCreated || new Date().toISOString(),
          }));
          setReports(formattedReports);
        } else {
          throw new Error("Invalid reports data structure");
        }
      } catch (error) {
        console.error("Error fetching reports:", error);
        // Fallback to sample data if API fails
        setReports(sampleData);
      }
    };
  
    fetchReports();
  }, []);

  const actionBodyTemplate = (rowData) => {
    const handleAction = (userId, action) => {
      if (action === "view") {
        setSelectedReport(rowData); // Set the selected report
        setModalVisible(true); // Show the modal
      } else if (action === "delete") {
        (`Are you sure delete this request, ${userId}`);
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
        <option value="response">Response</option>
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

  // Close the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedReport(null); // Clear the selected report
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

      {/* Custom Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Report Detail</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close Modal"
              >
                <span className="text-2xl">&times;</span> {/* Close icon */}
              </button>
            </div>
            <div className="mt-4">
              {selectedReport && (
                <div>
                  <p>
                    <strong>Reported To:</strong> {selectedReport.ReportedTo}
                  </p>
                  <p>
                    <strong>Reported By:</strong> {selectedReport.ReportedBy}
                  </p>
                  <p>
                    <strong>Description:</strong> {selectedReport.description}
                  </p>
                  <p>
                    <strong>Reason:</strong> {selectedReport.Reason}
                  </p>
                  <p>
                    <strong>Date Created:</strong> {selectedReport.DateCreated}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedReport.status}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
