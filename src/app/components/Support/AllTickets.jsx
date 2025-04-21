"use client";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { getHeaderStyle, getBodyStyle } from "../Users/UserData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getData, postData, deleteData, updateData } from "@/app/API/method";
import ChatModal from "../ChatModal";

const API_URL = "/admin-panel/support";
const REPORT_API_URL = "/report/request";

const statusOptions = [
  { label: "Active", value: "Active" },
  { label: "Resolved", value: "Resolved" },
  { label: "On Hold", value: "On Hold" },
  { label: "In Progress", value: "In Progress" },
];

const AllTickets = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [OpenChat, setOpenChat] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [error, setError] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchSupportRequests();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const fetchSupportRequests = async () => {
    try {
      setLoading(true);
      const response = await getData(API_URL);

      if (response?.data?.results && Array.isArray(response.data.results)) {
        setRequests(response.data.results);
        setFilteredRequests(response.data.results);
      } else {
        setRequests([]);
        setFilteredRequests([]);
        showToast("No support tickets found", "info");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to fetch support tickets";
      setError(errorMsg);
      showToast(errorMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleDeleteRequest = async (ticketId) => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) {
      return;
    }

    try {
      setLoading(true);
      
      const formData = new FormData();
      formData.append('feedback_id', ticketId);

      const response = await deleteData(
        REPORT_API_URL,
        formData
      );

      if (response.status === 200 || response.status === 204) {
        setRequests(prevRequests =>
          prevRequests.filter(request => request.id !== ticketId)
        );
        setFilteredRequests(prevRequests =>
          prevRequests.filter(request => request.id !== ticketId)
        );
        showToast("Ticket deleted successfully!");
      } else {
        throw new Error(response.data?.message || "Failed to delete ticket");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      setError(errorMsg);
      showToast(`Delete failed: ${errorMsg}`, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus, rowData) => {
    try {
      setStatusUpdating(true);
      
      const formData = new FormData();
      formData.append('feedback_id', rowData.id);
      formData.append('status', newStatus);
  
      const response = await updateData(
        REPORT_API_URL,
        formData
      );
  
      if (response.data?.message?.includes("Successfully") || response.status === 201) {
        const updatedRequests = requests.map(request =>
          request.id === rowData.id
            ? { ...request, status: newStatus }
            : request
        );
        setRequests(updatedRequests);
        setFilteredRequests(updatedRequests);
        showToast(response.data.message || "Status updated successfully!");
      } else if (response.status === 200 || response.status === 201) {
        const updatedRequests = requests.map(request =>
          request.id === rowData.id
            ? { ...request, status: newStatus }
            : request
        );
        setRequests(updatedRequests);
        setFilteredRequests(updatedRequests);
        showToast("Status updated successfully!");
      } else {
        throw new Error(response.data?.message || "Failed to update status");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      console.error("Error updating status:", error);
      
      if (errorMsg.includes("Updated Successfully")) {
        const updatedRequests = requests.map(request =>
          request.id === rowData.id
            ? { ...request, status: newStatus }
            : request
        );
        setRequests(updatedRequests);
        setFilteredRequests(updatedRequests);
        showToast(errorMsg, "success");
      } else {
        setError(errorMsg);
        showToast(`Status update failed: ${errorMsg}`, "error");
      }
    } finally {
      setStatusUpdating(false);
    }
  };

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleOpenChat = () => setOpenChat(true);
  const handleClosechat = () => setOpenChat(false);

  const openDetailsModalHandler = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeDetailsModalHandler = () => {
    setSelectedTicket(null);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterRequests(value, statusFilter);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setIsDropdownOpen(false); 
    filterRequests(searchTerm, status);
  };

  const filterRequests = (search, status) => {
    let updatedRequests = [...requests];
    if (search) {
      updatedRequests = updatedRequests.filter(
        (request) =>
          request.email.toLowerCase().includes(search.toLowerCase()) ||
          (request.subject && request.subject.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (status !== "All") {
      updatedRequests = updatedRequests.filter(
        (request) => request.status === status
      );
    }
    setFilteredRequests(updatedRequests);
  };

  const statusDropdownTemplate = (rowData) => {
    return (
      <div className="p-2 text-black">
        <Dropdown
          value={rowData.status}
          options={statusOptions}
          onChange={(e) => handleStatusChange(e.value, rowData)}
          placeholder="Select Status"
          className="w-full text-black rounded-md"
          panelClassName="bg-gray-100 border border-gray-300 shadow-lg p-5 text-black"
          disabled={statusUpdating}
        />
        {statusUpdating && (
          <small className="block mt-1 text-blue-600">Updating...</small>
        )}
      </div>
    );
  };

  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <button
        className="flex items-center border border-black px-4 py-2 rounded-lg"
        onClick={handleOpenChat}
        disabled={loading}
      >
        Response
      </button>
      <button
        className="flex items-center border border-black px-4 py-2 rounded-lg"
        onClick={() => handleDeleteRequest(rowData.id)}
        disabled={loading}
      >
        Delete
      </button>
      <button
        className="flex items-center border border-black px-4 py-2 rounded-lg"
        onClick={() => openDetailsModalHandler(rowData)}
        disabled={loading}
      >
        View Details
      </button>
      <ChatModal isOpen={OpenChat} onClose={handleClosechat} />
    </div>
  );

  return (
    <div className="p-5 table-scroll-wrapper">
      <ToastContainer />
      
      {error && (
        <div className="bg-red-500 text-white p-3 rounded mb-4">
          Error: {error}
          <button 
            className="float-right font-bold" 
            onClick={() => setError(null)}
          >
            ×
          </button>
        </div>
      )}

      {(loading || statusUpdating) && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <p>Processing request...</p>
          </div>
        </div>
      )}

      {/* Search and Status Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by email, subject"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Status Filter Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 cursor-pointer"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <input
              type="text"
              value={statusFilter === "All" ? "Filter by Status" : statusFilter}
              readOnly
              className="bg-transparent focus:outline-none cursor-pointer"
              placeholder="Filter by Status"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute mt-1 w-full bg-gray-100 rounded-lg shadow-lg z-10">
              <ul>
                <li
                  onClick={() => handleStatusFilter("All")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
                >
                  All
                </li>
                <li
                  onClick={() => handleStatusFilter("On Hold")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
                >
                  On Hold
                </li>
                <li
                  onClick={() => handleStatusFilter("Resolved")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
                >
                  Resolved
                </li>
                <li
                  onClick={() => handleStatusFilter("Pending")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
                >
                  Pending
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <DataTable
        value={filteredRequests}
        paginator
        first={first}
        rows={rows}
        onPage={onPage}
        scrollHeight="700px"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        tableStyle={{ minWidth: "100rem" }}
        className="custom-paginator"
        loading={loading}
      >
        <Column
          field="id"
          header="ID"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="email"
          header="Email"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="subject"
          header="Subject"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="description"
          header="Description"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="created_at"
          header="Submit Date"
          body={(rowData) => formatDate(rowData.created_at)}
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="status"
          header="Status"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
          body={statusDropdownTemplate}
        />
        <Column
          body={actionTemplate}
          header="Actions"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
      </DataTable>

      {/* Details Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <h2 className="text-lg font-bold mb-4">Ticket Details</h2>
            <p>
              <strong>ID:</strong> {selectedTicket.id}
            </p>
            <p>
              <strong>Email:</strong> {selectedTicket.email}
            </p>
            <p>
              <strong>Subject:</strong> {selectedTicket.subject}
            </p>
            <p>
              <strong>Description:</strong> {selectedTicket.description}
            </p>
            <p>
              <strong>Status:</strong> {selectedTicket.status}
            </p>
            <p>
              <strong>Submit Date:</strong> {formatDate(selectedTicket.created_at)}
            </p>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeDetailsModalHandler}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTickets;