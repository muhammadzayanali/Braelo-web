"use client";

import React from "react";

export default function ListingEmptyState({
  title = "No record found",
  description,
}) {
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-[280px] py-14 px-6 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="mb-6 rounded-2xl bg-[#F6F8FB] p-10 text-[#ACB6BE]">
        <svg
          className="mx-auto h-28 w-28"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect
            x="18"
            y="38"
            width="84"
            height="58"
            rx="8"
            stroke="currentColor"
            strokeWidth="2.25"
          />
          <path
            d="M34 38V30a10 10 0 0110-10h32a10 10 0 0110 10v8"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <path
            d="M44 64h32M44 76h22"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="78" cy="52" r="5" fill="currentColor" opacity="0.35" />
        </svg>
      </div>
      <p className="text-lg font-semibold text-[#78828A]">{title}</p>
      {description ? (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[#ACB6BE]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
