"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getHeaderStyle, getBodyStyle } from "../Users/UserData";
import Modal from "../Modal";
import ChatModal from "../ChatModal";
// Initial support requests data
export const initialSupportRequests = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Having trouble logging in",
    date: "2024-10-01",
    status: "On Hold",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Closed",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Closed",
  },
  {
    id: 5,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Active",
  },
  {
    id: 6,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Solved",
  },
  {
    id: 7,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Active",
  },
  {
    id: 8,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Closed",
  },
  {
    id: 9,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    description: "Payment not processed",
    date: "2024-10-03",
    status: "Solved",
  },
  // Add additional entries as needed...
];

const AllTickets = () => {
  const [requests, setRequests] = useState(initialSupportRequests);
  const [OpenModal, setOpenModal] = useState(false);
  const [OpenChat, setOpenChat] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

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

  // Column Template for Actions
  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <button className="flex items-center  border border-black px-4 py-2 rounded-lg"
       onClick={handleOpenChat}
      >
        Response
      </button>
      <button
        className="flex items-center  border border-black px-4 py-2 rounded-lg"
        onClick={handleOpen}
      >
        Delete
      </button>

      <button
        className="flex items-center  border border-black px-4 py-2 rounded-lg"
        onClick={() => openDetailsModalHandler(rowData)}
      >
        View Details
      </button>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={OpenModal}
        closeModal={handleClose}
        imageSrc="/delete.png"
        text="Are you sure you want to delete this User?"
        label1="Yes, I do"
        label2="Cancel"
      />
      <ChatModal isOpen={OpenChat} onClose={handleClosechat}/>
    </div>
  );

  return (
    <div className="p-4 overflow-auto">
      <DataTable
        value={requests}
        paginator
        rows={10}
        tableStyle={{ minWidth: "100rem" }}
        className="p-datatable-gridlines"
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
              &times; {/* Close (X) icon */}
            </button>

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
