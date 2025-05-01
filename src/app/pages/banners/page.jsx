"use client";
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getBodyStyle, getHeaderStyle } from "@/app/components/Users/UserData";
import BackButton from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import { getBanData, updateListData, deleteData } from "@/app/API/method";
import { toast } from "react-toastify";

export default function BannerManagement() {
  const [banners, setBanners] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const transformBannerData = (data) =>
    data.map((item) => ({
      _id: item._id || "",
      user_id: item.user_id || "",
      business_email: item.business_email || "",
      business_name: item.business_name || "",
      business_category: item.business_category || "",
      business_subcategory: item.business_subcategory || "",
      business_banner: Array.isArray(item.business_banner)
        ? item.business_banner
        : [item.business_banner || ""],
    }));

  const fetchBanners = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getBanData("/auth/business/banner");
      if (!response || response.error || response.status !== 200) {
        throw new Error(response?.error || "Failed to fetch banners");
      }

      if (!Array.isArray(response.data)) {
        throw new Error("Invalid data structure received from server");
      }

      const transformedData = transformBannerData(response.data);
      setBanners(transformedData);

      if (transformedData.length === 0) {
        toast.info("No banners found");
      }
    } catch (err) {
      setError(err.message || "Failed to load banners");
      toast.error(err.message || "Failed to load banners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const editBanner = (banner) => {
    setSelectedBanner({
      ...banner,
      business_banner_file: null
    });
    setEditModalVisible(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedBanner(prev => ({
        ...prev,
        business_banner: [URL.createObjectURL(file)],
        business_banner_file: file
      }));
    }
  };

  const saveBanner = async () => {
    if (!selectedBanner) return;

    try {
      setLoading(true);
      const formData = new FormData();
      
      formData.append("banner_id", selectedBanner._id);
      formData.append("business_email", selectedBanner.business_email);
      formData.append("business_name", selectedBanner.business_name);
      formData.append("business_category", selectedBanner.business_category);
      formData.append("business_subcategory", selectedBanner.business_subcategory);
      
      if (selectedBanner.business_banner_file) {
        formData.append("business_banner", selectedBanner.business_banner_file);
      }

      const response = await updateListData(
        "/admin-panel/business/banner/update",
        formData
      );

      if (!response || response.error || response.status !== 200) {
        throw new Error(response?.message || "Update failed");
      }

      await fetchBanners();
      setEditModalVisible(false);
      toast.success("Banner updated successfully");
    } catch (err) {
      toast.error(err.message || "Failed to update banner");
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (banner) => {
    setSelectedBanner(banner);
    setDeleteModalVisible(true);
  };

  const deleteBanner = async () => {
    if (!selectedBanner) return;

    try {
      setLoading(true);
      const bannerId = selectedBanner._id;

      const response = await deleteData("/admin-panel/business/banner/delete", {
        banner_id: bannerId,
      });

      if (!response || response.error || response.status !== 200) {
        throw new Error(response?.message || "Delete failed");
      }

      await fetchBanners();
      setDeleteModalVisible(false);
      toast.success("Banner deleted successfully");
    } catch (err) {
      setError(err.message || "Failed to delete banner");
      toast.error(err.message || "Failed to delete banner");
    } finally {
      setLoading(false);
    }
  };

  const imageTemplate = (rowData) => {
    const imageUrl = rowData.business_banner?.[0] || "https://via.placeholder.com/80";

    return (
      <div className="w-16 h-16 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={rowData.business_name || "Banner"}
          className="max-w-full max-h-full rounded-md object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/80";
          }}
        />
      </div>
    );
  };

  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <button
        onClick={() => editBanner(rowData)}
        className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        disabled={loading}
      >
        Edit
      </button>
      <button
        onClick={() => confirmDelete(rowData)}
        className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        disabled={loading}
      >
        Delete
      </button>
    </div>
  );

  const handleNewListing = () => {
    router.push("/pages/banners/addbanner");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between p-5 border-b">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500]">All Banners</h1>
        </div>
        <button
          onClick={handleNewListing}
          className="px-4 py-2 bg-[#CD9403] text-white rounded-lg hover:bg-[#b78302] transition"
        >
          Add Banner
        </button>
      </div>

      {error && (
        <div className="my-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
          >
            ×
          </button>
        </div>
      )}

      <DataTable
        value={banners}
        paginator
        first={first}
        rows={rows}
        onPage={onPage}
        rowsPerPageOptions={[5, 10, 20]}
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} banners"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        tableStyle={{ minWidth: "100%" }}
        loading={loading}
        emptyMessage="No banners found. Please add a new banner."
      >
        <Column
          field="user_id"
          header="User ID"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          body={imageTemplate}
          header="Banner Image"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="business_email"
          header="Business Email"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="business_name"
          header="Business Name"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="business_category"
          header="Category"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="business_subcategory"
          header="Subcategory"
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

      {/* Edit Modal */}
      {isEditModalVisible && selectedBanner && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto py-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 sticky top-0 bg-white pb-2">Edit Banner</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Banner Image</label>
                <div className="mb-2 h-40 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedBanner.business_banner?.[0] || "https://via.placeholder.com/300"} 
                    alt="Banner" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="w-full text-sm border rounded p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Business Name</label>
                <input
                  type="text"
                  value={selectedBanner.business_name}
                  onChange={(e) => setSelectedBanner({...selectedBanner, business_name: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Business Email</label>
                <input
                  type="email"
                  value={selectedBanner.business_email}
                  onChange={(e) => setSelectedBanner({...selectedBanner, business_email: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                  type="text"
                  value={selectedBanner.business_category}
                  onChange={(e) => setSelectedBanner({...selectedBanner, business_category: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subcategory</label>
                <input
                  type="text"
                  value={selectedBanner.business_subcategory}
                  onChange={(e) => setSelectedBanner({...selectedBanner, business_subcategory: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 sticky bottom-0 bg-white pb-2">
                <button
                  onClick={() => setEditModalVisible(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={saveBanner}
                  className="px-4 py-2 bg-[#CD9403] text-white rounded"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalVisible && selectedBanner && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <div className="mb-4">
              <p className="mb-2">You are about to delete:</p>
              <div className="border rounded-md p-3">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={selectedBanner.business_banner?.[0] || "https://via.placeholder.com/80"}
                      alt="Banner"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{selectedBanner.business_name}</p>
                    <p className="text-sm text-gray-600">{selectedBanner.business_email}</p>
                  </div>
                </div>
                <p className="text-sm text-red-600 mt-2">This action cannot be undone.</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteModalVisible(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={deleteBanner}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}