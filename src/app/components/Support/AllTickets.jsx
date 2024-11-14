"use client";
import React, { useState,useEffect,useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getHeaderStyle, getBodyStyle } from "../Users/UserData";
import Modal from "../Modal";
import ChatModal from "../ChatModal";

export const initialSupportRequests = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "On Hold",
    file: "https://example.com/file1.pdf",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "Resolved",
    file: "https://example.com/file1.pdf",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "Pending",
    file: "https://example.com/file1.pdf",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "On Hold",
    file: "https://example.com/file1.pdf",
  },
  {
    id: 4,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "On Hold",
    file: "https://example.com/file1.pdf",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "On Hold",
    file: "https://example.com/file1.pdf",
  },
  {
    id: 6,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "On Hold",
    file: "https://example.com/file1.pdf",
  },
  {
    id: 7,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "On Hold",
    file: "https://example.com/file1.pdf",
  },

  // Additional entries...
];

const AllTickets = () => {
  const [requests, setRequests] = useState(initialSupportRequests);
  const [filteredRequests, setFilteredRequests] = useState(
    initialSupportRequests
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [OpenModal, setOpenModal] = useState(false);
  const [OpenChat, setOpenChat] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [first, setFirst] = useState(0); // Pagination start row
  const [rows, setRows] = useState(10); // Rows per page
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside of it
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


  // Pagination handler
  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleOpenChat = () => setOpenChat(true);
  const handleClosechat = () => setOpenChat(false);

  const openDetailsModalHandler = (ticket) => {
    setSelectedTicket(ticket); // Set the clicked ticket
    setOpenDetailsModal(true); // Open the details modal
  };
  const closeDetailsModalHandler = () => {
    setSelectedTicket(null); // Clear selected ticket
    setOpenDetailsModal(false); // Close the details modal
  };
  const toggleStatus = () => {
    if (selectedTicket) {
      setSelectedTicket({
        ...selectedTicket,
        status:
          selectedTicket.status === "On Hold" || "Pending"
            ? "Resolved"
            : "On Hold",
      });
    }
  };
  // Search filter handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterRequests(value, statusFilter);
  };

  // Status filter handler
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setIsDropdownOpen(false); 
    filterRequests(searchTerm, status);
  };

  // Filter function
  const filterRequests = (search, status) => {
    let updatedRequests = [...requests];
    if (search) {
      updatedRequests = updatedRequests.filter(
        (request) =>
          request.name.toLowerCase().includes(search.toLowerCase()) ||
          request.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (status !== "All") {
      updatedRequests = updatedRequests.filter(
        (request) => request.status === status
      );
    }
    setFilteredRequests(updatedRequests);
  };

  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <button
        className="flex items-center border border-black px-4 py-2 rounded-lg"
        onClick={handleOpenChat}
      >
        Response
      </button>
      <button
        className="flex items-center border border-black px-4 py-2 rounded-lg"
        onClick={handleOpen}
      >
        Delete
      </button>
      <button
        className="flex items-center border border-black px-4 py-2 rounded-lg"
        onClick={() => openDetailsModalHandler(rowData)}
      >
        View Details
      </button>
      <Modal
        isOpen={OpenModal}
        closeModal={handleClose}
        imageSrc="/delete.png"
        text="Are you sure you want to delete this User?"
        label1="Yes, I do"
        label2="Cancel"
      />
      <ChatModal isOpen={OpenChat} onClose={handleClosechat} />
    </div>
  );

  // File column template
  const fileTemplate = (rowData) => (
    <a
      href={rowData.file}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline"
    >
      Open File
    </a>
  );

  return (
    <div className="p-5 table-scroll-wrapper">
      {/* Search and Status Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name, email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Status Filter Dropdown */}
        <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 cursor-pointer"
        onClick={() => setIsDropdownOpen((prev) => !prev)} // Toggle dropdown
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
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              All
            </li>
            <li
              onClick={() => handleStatusFilter("On Hold")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              On Hold
            </li>
            <li
              onClick={() => handleStatusFilter("Resolved")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Resolved
            </li>
            <li
              onClick={() => handleStatusFilter("Pending")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
        currentPageReportTemplate="Showing 1 to 10 of 50 entries"
        tableStyle={{ minWidth: "100rem" }}
        className="custom-paginator"
      >
        <Column
          field="id"
          header="ID"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="name"
          header="Name"
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
          field="description"
          header="Description"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="date"
          header="Submit Date"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="status"
          header="Status"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          body={fileTemplate}
          header="File"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
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
              <strong>Name:</strong> {selectedTicket.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedTicket.email}
            </p>
            <p>
              <strong>Description:</strong> {selectedTicket.description}
            </p>
            <p>
              <strong>Status:</strong> {selectedTicket.status}
            </p>
            <p>
              <strong>Submit Date:</strong> {selectedTicket.date}
            </p>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeDetailsModalHandler}
            >
              &times;
            </button>
            {selectedTicket &&
              (selectedTicket.status === "On Hold" ||
                selectedTicket.status === "Pending") && (
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={toggleStatus}
                >
                  Toggle Status
                </button>
              )}

            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closeDetailsModalHandler}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTickets;
