"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { debounce } from "lodash";
import { getData } from "@/app/API/method";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ReportedUser = () => {
  // State management
  const [reports, setReports] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const exportRef = useRef(null);
  const [showExportOptions, setShowExportOptions] = useState(false);

  // API endpoints
  const API_URL = "/admin-panel/report/action";
  const SEARCH_API_URL = "/admin-panel/reported/user/search";

  // Fetch reports with debouncing
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

  // Data formatting helpers
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

  // Style functions for table headers
  const getHeaderStyle = () => {
    return { 
      backgroundColor: '#f8fafc',
      color: '#64748b',
      fontSize: '14px',
      fontWeight: '500',
      padding: '12px 16px',
      borderBottom: '1px solid #e2e8f0'
    };
  };

  const getBodyStyle = () => {
    return { 
      padding: '12px 16px',
      fontSize: '14px',
      color: '#334155',
      borderBottom: '1px solid #e2e8f0'
    };
  };

  // Event handlers
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const showReportDetails = (report) => {
    setSelectedReport(report);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReport(null);
  };

  // Export functionality
  const handleExport = (format) => {
    setShowExportOptions(false);
    
    switch(format) {
      case 'CSV':
        exportCSV();
        break;
      case 'PDF':
        exportPDF();
        break;
      case 'HTML':
        exportHTML();
        break;
      default:
        break;
    }
  };

  const exportCSV = () => {
    let csvContent = "ID,Reported To,Reported By,Reason,Status,Date Created\n";
    reports.forEach(report => {
      csvContent += `${report.id},${report.reportedTo},${report.reportedBy},"${report.reason}",${report.status},${report.createdAt}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `reported_users_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Reported Users', 14, 16);
    
    const headers = [['ID', 'Reported To', 'Reported By', 'Reason', 'Status', 'Date']];
    const data = reports.map(report => [
      report.id,
      report.reportedTo,
      report.reportedBy,
      report.reason,
      report.status,
      report.createdAt
    ]);
    
    doc.autoTable({
      head: headers,
      body: data,
      startY: 20,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [22, 160, 133] }
    });
    
    doc.save(`reported_users_${new Date().toISOString().slice(0,10)}.pdf`);
  };

  const exportHTML = () => {
    let htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>Reported Users Export</title>
  <style>
    body { font-family: Arial, sans-serif; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #16a085; color: white; }
    tr:nth-child(even) { background-color: #f2f2f2; }
  </style>
</head>
<body>
  <h1>Reported Users</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Reported To</th>
        <th>Reported By</th>
        <th>Reason</th>
        <th>Status</th>
        <th>Date Created</th>
      </tr>
    </thead>
    <tbody>`;
    
    reports.forEach(report => {
      htmlContent += `
      <tr>
        <td>${report.id}</td>
        <td>${report.reportedTo}</td>
        <td>${report.reportedBy}</td>
        <td>${report.reason}</td>
        <td>${report.status}</td>
        <td>${report.createdAt}</td>
      </tr>`;
    });
    
    htmlContent += `
    </tbody>
  </table>
</body>
</html>`;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `reported_users_${new Date().toISOString().slice(0,10)}.html`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Table column templates
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

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex justify-between border-b py-4 p-5">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500]">
            Reported Users
          </h1>
        </div>
        <div className="flex gap-2 justify-end">
          {/* Export Button with Dropdown */}
          <div className="relative" ref={exportRef}>
            <button
              onClick={() => setShowExportOptions(!showExportOptions)}
              className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-3 py-2 focus:outline-none"
            >
              <Image
                src="/images/export.png"
                alt="export icon"
                width={24}
                height={24}
                className="absolute left-3"
              />
              <span className="text-[#75818D] text-[14px] font-[400]">
                Export
              </span>
            </button>
            {showExportOptions && (
              <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="py-1">
                  <button
                    onClick={() => handleExport('CSV')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    CSV
                  </button>
                  <button
                    onClick={() => handleExport('PDF')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    PDF
                  </button>
                  <button
                    onClick={() => handleExport('HTML')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    HTML
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="py-2 px-2 rounded-lg text-sm text-gray-500 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
            <option value="Rejected">Rejected</option>
          </select>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search By Name"
              className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            )}
          </div>

          {/* Date Filter */}
          <div className="relative">
            <input
              type="date"
              placeholder="Select date"
              className="block w-full pl-4 pr-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              value={dateFilter}
              onChange={handleDateChange}
            />
            {dateFilter && (
              <button
                onClick={() => setDateFilter("")}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
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
            //rowsPerPageOptions={[5, 10, 20, 50]}
            //paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
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
                  <p className="font-bold">Report ID:</p>
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
    </div>
  );
};

export default ReportedUser;