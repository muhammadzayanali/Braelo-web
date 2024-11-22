"use client";
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getBodyStyle, getHeaderStyle } from "@/app/components/Users/UserData";
import BackButton from "@/app/components/BackButton";
import { useRouter } from "next/navigation";


export default function BannerManagement() {
  const [banners, setBanners] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const router = useRouter();


  // Simulating data fetch
  useEffect(() => {
    const jsonData = [
      {
        id: 1,
        title: "Summer Sale",
        description: "Get up to 50% off on summer items.",
        image: "/b7.png",
        status: "Active",
        dateCreated: "2024-11-01",
        url: "/sale",
      },
      {
        id: 2,
        title: "New Arrivals",
        description: "Explore our latest collection.",
        image: "/b7.png",
        status: "Inactive",
        dateCreated: "2024-11-05",
        url: "/new-arrivals",
      },
      // Add more entries here...
    ];
    setBanners(jsonData);
  }, []);

  // Edit Banner
  const editBanner = (banner) => {
    setSelectedBanner(banner);
    setEditModalVisible(true);
  };

  // Save Changes
  const saveBanner = () => {
    setBanners((prev) =>
      prev.map((item) =>
        item.id === selectedBanner.id ? selectedBanner : item
      )
    );
    setEditModalVisible(false);
  };

  // Delete Banner
  const confirmDelete = (banner) => {
    setSelectedBanner(banner);
    setDeleteModalVisible(true);
  };

  const deleteBanner = () => {
    setBanners((prev) => prev.filter((item) => item.id !== selectedBanner.id));
    setDeleteModalVisible(false);
  };

  // Image Column Template
  const imageTemplate = (rowData) => (
    <img
      src={rowData.image}
      alt={rowData.title}
      className="w-16 h-16 rounded-md"
    />
  );

  // Actions Column Template
  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <button
        onClick={() => editBanner(rowData)}
        className=" border border-black px-4 py-2 rounded-lg"
      >
        Edit
      </button>
      <button
        onClick={() => confirmDelete(rowData)}
        className=" border border-black px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
//Add new Baneer
const handleNewListing = () => {
  router.push("/pages/banners/addbanner");
};

  return (
    <div className="p-6">
      <div className="flex justify-between p-5 border-b ">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500]">All Banners</h1>
        </div>
        <div>
          <button
            onClick={handleNewListing}
            className="px-4 py-1 bg-[#CD9403] text-white rounded-lg font-plus"
          >
            Add Banner
          </button>
        </div>
      </div>
      {/* PrimeReact DataTable */}
      <DataTable value={banners} paginator rows={10} className="p-datatable-sm">
        <Column
          field="id"
          header="ID"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          body={imageTemplate}
          header="Image"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="title"
          header="Title"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="description"
          header="Description"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="status"
          header="Status"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="dateCreated"
          header="Date Created"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="url"
          header="URL"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          body={actionTemplate}
          header="Actions"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
      </DataTable>

      {/* Edit Modal */}
      {isEditModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Banner</h2>
            {selectedBanner && (
              <div>
                <label className="block mb-2">Title</label>
                <input
                  type="text"
                  value={selectedBanner.title}
                  onChange={(e) =>
                    setSelectedBanner({
                      ...selectedBanner,
                      title: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
                <label className="block mt-4 mb-2">Description</label>
                <input
                  type="text"
                  value={selectedBanner.description}
                  onChange={(e) =>
                    setSelectedBanner({
                      ...selectedBanner,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setEditModalVisible(false)}
                    className="px-4 py-2 text-gray-600 bg-gray-200 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveBanner}
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this banner?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setDeleteModalVisible(false)}
                className="px-4 py-2 text-gray-600 bg-gray-200 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={deleteBanner}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
