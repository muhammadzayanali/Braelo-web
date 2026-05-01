"use client";
import React, { useEffect } from "react";
import "./globals.css";
import LoginForm from "@/app/components/auth/LoginForm";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="admin-panel">
      <LoginForm />
    </div>
  );
}
