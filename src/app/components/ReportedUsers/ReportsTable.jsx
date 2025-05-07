"use client";
import React, { useState, useEffect, useCallback } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getBodyStyle, getHeaderStyle } from "../Users/UserData";
import { getData } from "@/app/API/method";
import { debounce } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "/admin-panel/reported/user";
const SEARCH_API_URL = "/admin-panel/reported/user/search";

const ReportsTable = ({ searchQuery = "", statusFilter = "All", dateFilter = "" }) => {
  const [reports, setReports] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query, status, date) => {
      await fetchReports(query, status, date);
    }, 500),
    []
  );

  useEffect(() => {
    if (searchQuery || statusFilter !== "All" || dateFilter) {
      debouncedSearch(searchQuery, statusFilter, dateFilter);
    } else {
      fetchReports();
    }
  }, [searchQuery, statusFilter, dateFilter]);

  const fetchReports = async (query = "", status = "All", date = "") => {
    try {
      setLoading(true);
      let url = API_URL;
      const params = new URLSearchParams();

      if (query || status !== "All" || date) {
        url = SEARCH_API_URL;
        if (query) params.append('search_query', query);
        if (status !== "All") params.append('report_status', status);
        if (date) params.append('creation_date', formatDateForAPI(date));
      }

      const response = await getData(`${url}?${params.toString()}`);
      
      if (response?.data?.results) {
        setReports(formatReportData(response.data.results));
      } else {
        setReports([]);
        if (query || status !== "All" || date) {
          toast.info("No matching reports found");
        }
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
      toast.error(error.response?.data?.message || "Failed to load reports");
      setReports([]);
    } finally {
      setLoading(false);
    }
  };

  const formatReportData = (reports) => {
    return reports.map((report) => ({
      id: report.id,
      reportedTo: report.reported_to || "N/A",
      reportedBy: report.reported_by || "N/A",
      description: report.description || "No description",
      status: report.status || "Pending",
      reason: report.reason || "No reason specified",
      createdAt: formatDate(report.created_at) || "N/A",
      updatedAt: formatDate(report.updated_at) || "N/A"
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateForAPI = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <select
        onChange={(e) => e.target.value === "view" && showReportDetails(rowData)}
        className="border rounded-md p-1 text-sm"
      >
        <option value="">Actions</option>
        <option value="view">View Details</option>
      </select>
    );
  };

  const statusBodyTemplate = (rowData) => {
    const statusClass = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Resolved': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    }[rowData.status] || 'bg-gray-100 text-gray-800';
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs ${statusClass}`}>
        {rowData.status}
      </span>
    );
  };

  const showReportDetails = (report) => {
    setSelectedReport(report);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReport(null);
  };

  return (
    <div className="p-5">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Reports Table */}
      <div className="card table-scroll-wrapper">
        <DataTable
          value={reports}
          paginator
          first={first}
          rows={rows}
          onPage={onPage}
          scrollHeight="400px"
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          tableStyle={{ minWidth: "100rem" }}
          className="custom-paginator"
          loading={loading}
          emptyMessage="No reports found"
        >
          <Column
            field="id"
            header="Report ID"
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            sortable
          />
          <Column
            field="reportedTo"
            header="Reported To"
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            sortable
          />
          <Column
            field="reportedBy"
            header="Reported By"
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            sortable
          />
          <Column
            field="reason"
            header="Reason"
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            sortable
          />
          <Column
            field="createdAt"
            header="Date Created"
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            sortable
          />
          <Column
            field="status"
            header="Status"
            body={statusBodyTemplate}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            sortable
          />
          <Column
            header="Actions"
            body={actionBodyTemplate}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          />
        </DataTable>
      </div>

      {/* Report Details Modal */}
      {isModalVisible && selectedReport && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Report Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Report ID:</p>
                <p>{selectedReport.id}</p>
              </div>
              <div>
                <p className="font-semibold">Status:</p>
                <p>{selectedReport.status}</p>
              </div>
              <div>
                <p className="font-semibold">Reported To:</p>
                <p>{selectedReport.reportedTo}</p>
              </div>
              <div>
                <p className="font-semibold">Reported By:</p>
                <p>{selectedReport.reportedBy}</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-semibold">Reason:</p>
                <p>{selectedReport.reason}</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-semibold">Description:</p>
                <p className="whitespace-pre-wrap">{selectedReport.description}</p>
              </div>
              <div>
                <p className="font-semibold">Date Created:</p>
                <p>{selectedReport.createdAt}</p>
              </div>
              {selectedReport.updatedAt && (
                <div>
                  <p className="font-semibold">Last Updated:</p>
                  <p>{selectedReport.updatedAt}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsTable;