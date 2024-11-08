"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NotificationsList from "@/app/components/Notifications/NotificationsList";
import BackButton from "@/app/components/BackButton";

const Notifications = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex justify-between p-5 border-b">
        <div className="flex items-center gap-2">
          <BackButton />
        <h1 className="text-[#78828A] text-[24px] font-[500]">Notifications</h1>
        </div>
        <button
          className="px-4 py-2 bg-[#CD9403] text-white rounded-lg font-plus"
          onClick={() => router.push("/pages/notifications/addnotification")}
        >
          Add New Notification
        </button>
      </div>
      <div className="p-4">
        <NotificationsList />
      </div>
    </div>
  );
};

export default Notifications;
