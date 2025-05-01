"use client";
import React from "react";

const CardToggle = ({ status, onToggle }) => {
    const handleToggle = () => {
        const newStatus = !status;
        if (onToggle) onToggle(newStatus);
    };

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={status}
                onChange={handleToggle}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#CD9403]"></div>
            <span className={`ml-2 ${status ? "text-green-600" : "text-gray-400"}`}>
                {status ? "Active" : "Inactive"}
            </span>
        </label>
    );
};

export default CardToggle;