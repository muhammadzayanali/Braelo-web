"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getHeaderStyle } from "../Users/UserData";
import { getBodyStyle } from "../Users/UserData";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getData, postData } from "@/app/API/method";

export default function BussniessTable() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const router = useRouter();

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleViewProfile = (rowData) => {
    // Store the business data in sessionStorage
    sessionStorage.setItem('currentBusinessData', JSON.stringify(rowData));
    router.push('/pages/business/businessdetail');
  };

  const handleDeactivate = async (businessId) => {
    try {
      if (window.confirm("Are you sure you want to deactivate this business?")) {
        setLoading(true);
        await postData('/admin-panel/business/deactivate', { user_id: businessId });
        
        setData(prevData => 
          prevData.map(item => 
            item.ID === businessId ? {...item, Status: "Inactive"} : item
          )
        );
        
        alert("Business deactivated successfully");
      }
    } catch (error) {
      console.error("Error deactivating business:", error);
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please login again.");
        router.push("/login");
      } else {
        alert("Failed to deactivate business");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getData('/admin-panel/business');
      if (response && response.data) {
        const mappedData = response.data.results.map(item => ({
          ID: item.id,
          BusinessName: item.business_name,
          Email: item.business_email,
          "Phone Number": item.business_number,
          website: item.business_website,
          BusinessType: item.business_category,
          Status: item.is_active ? "Active" : "Inactive",
          "Date Created": new Date(item.created_at).toLocaleDateString(),
          "Last Update": new Date(item.updated_at).toLocaleDateString(),
          Coordinates: item.business_address,
          businessId: item.user_id,
          business_logo: item.business_logo?.[0] || "",
        }));
        setData(mappedData);
        setTotalRecords(response.data.count);
      }
    } catch (error) {
      console.error("Error fetching business data:", error);
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please login again.");
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const statusCheck = (rowData) => {
    let statusClasses;
    switch (rowData.Status) {
      case "Active":
        statusClasses = "bg-[#06B64C] text-white p-1 rounded-lg text-center";
        break;
      case "Deleted":
        statusClasses = "bg-[#C7233F] text-white p-1 rounded-lg text-center";
        break;
      case "Inactive":
        statusClasses = "bg-[#C7233F] text-white p-1 rounded-lg text-center";
        break;
      default:
        statusClasses = "py-1 px-2 rounded";
    }

    return <div className={statusClasses}>{rowData.Status}</div>;
  };

  const actionButton = (rowData) => {
    return (
      <div className="flex gap-2">
        <Image 
          src="/g3.png" 
          alt="profile view" 
          width={24}
          height={24}
          onClick={() => handleViewProfile(rowData)} 
          className="cursor-pointer hover:opacity-80"
          title="View Details"
        />
        {rowData.Status === "Active" && (
          <Image 
            src="/g2.png" 
            alt="deactivate" 
            width={24}
            height={24}
            onClick={() => handleDeactivate(rowData.businessId)} 
            className="cursor-pointer hover:opacity-80"
            title="Deactivate Business"
          />
        )}
      </div>
    );
  };

  const headerCheckbox = () => {
    const isAllSelected = data.length && selectedData.length === data.length;

    const toggleSelectAll = () => {
      if (isAllSelected) {
        setSelectedData([]);
      } else {
        setSelectedData(data.map((item) => item.ID));
      }
    };

    return (
      <input
        type="checkbox"
        checked={isAllSelected}
        onChange={toggleSelectAll}
        className="form-checkbox"
      />
    );
  };

  const toggleRowSelection = (rowData) => {
    const isSelected = selectedData.includes(rowData.ID);
    setSelectedData((prevSelected) => {
      if (isSelected) {
        return prevSelected.filter((id) => id !== rowData.ID);
      } else {
        return [...prevSelected, rowData.ID];
      }
    });
  };

  const rowCheckbox = (rowData) => {
    const isSelected = selectedData.includes(rowData.ID);
    return (
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleRowSelection(rowData)}
        className="form-checkbox"
      />
    );
  };

  const HeaderIcon = () => {
    return (
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 1.5V10.4999"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.99996 9L2.49998 10.5L1 9"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 10.4999V1.5"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.99996 2.99998L7.49998 1.5L6 2.99998"
          stroke="#757575"
          strokeWidth="1.12499"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderHeader = (label, Icon) => (
    <div className="flex items-center gap-2">
      <span>{label}</span>
      <Icon />
    </div>
  );

  const ImageLogo = (rowData) => {
    return (
      <div className="w-10 h-10">
        {rowData.business_logo ? (
          <img 
            src={rowData.business_logo} 
            alt="logo" 
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = '/b5.png';
            }}
          />
        ) : (
          <Image src="/b5.png" alt="logo" width={40} height={40} className="object-contain" />
        )}
      </div>
    );
  };

  return (
    <div className="p-5">
      <div className="table-scroll-wrapper">
        <DataTable
          value={data}
          dataKey="ID"
          paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPage={onPage}
          loading={loading}
          rowsPerPageOptions={[5, 10, 20]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate={`Showing {first} to {last} of ${totalRecords} entries`}
          tableStyle={{ minWidth: "200rem" }}
        >
          <Column
            header={headerCheckbox()}
            body={rowCheckbox}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Actions", HeaderIcon)}
            body={actionButton}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Logo", HeaderIcon)}
            body={ImageLogo}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Business Name", HeaderIcon)}
            field="BusinessName"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("ID", HeaderIcon)}
            field="ID"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Email", HeaderIcon)}
            field="Email"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Phone Number", HeaderIcon)}
            field="Phone Number"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Website", HeaderIcon)}
            field="website"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Business Type", HeaderIcon)}
            field="BusinessType"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Address", HeaderIcon)}
            field="Coordinates"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Status", HeaderIcon)}
            body={statusCheck}
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Date Created", HeaderIcon)}
            field="Date Created"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
          <Column
            header={renderHeader("Last Update", HeaderIcon)}
            field="Last Update"
            headerStyle={getHeaderStyle()}
            bodyStyle={getBodyStyle()}
          />
        </DataTable>
      </div>
    </div>
  );
}