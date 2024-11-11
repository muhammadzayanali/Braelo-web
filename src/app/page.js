"use client";
import React, { useEffect } from "react";
import './globals.css';
import Login from "./auth/page";

export default function Home() {

  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <>
      <div className="admin-panel">
        <Login />
      </div>
    </>
  );
}
