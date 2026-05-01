"use client";

import React from "react";
import { Dialog } from "primereact/dialog";

const dialogStyles = `
  .confirm-delete-dialog.p-dialog {
    background-color: #ffffff;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.18);
    border: none;
    box-sizing: border-box;
  }
  .confirm-delete-dialog .p-dialog-content,
  .confirm-delete-dialog .p-dialog-footer {
    background-color: #ffffff;
  }
  .confirm-delete-dialog .p-dialog-content {
    text-align: center !important;
    border-radius: 1.25rem 1.25rem 0 0;
    padding: 14px !important;
    box-sizing: border-box;
  }
  .confirm-delete-dialog .p-dialog-footer {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    width: 100% !important;
    gap: 1rem !important;
    padding: 14px !important;
    box-sizing: border-box;
    border-radius: 0 0 1.25rem 1.25rem;
    border-top: none !important;
  }
`;

/**
 * Shared delete/destructive confirmation — matches Users table modal styling.
 */
export default function ConfirmDeleteDialog({
  visible,
  onHide,
  onConfirm,
  title,
  message = "This action cannot be undone.",
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  confirmLoading = false,
}) {
  const handleHide = () => {
    if (confirmLoading) return;
    onHide();
  };

  const footer = (
    <div className="flex w-full flex-row gap-4 p-4">
      <button
        type="button"
        onClick={handleHide}
        disabled={confirmLoading}
        className="w-full min-h-[48px] rounded-xl bg-[#E5E7EB] py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-300 disabled:opacity-50"
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        onClick={onConfirm}
        disabled={confirmLoading}
        className="w-full min-h-[48px] rounded-xl bg-[#EF4444] py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 disabled:opacity-50"
      >
        {confirmLoading ? "Please wait…" : confirmLabel}
      </button>
    </div>
  );

  return (
    <>
      <style jsx global>{dialogStyles}</style>
      <Dialog
        visible={visible}
        onHide={handleHide}
        modal
        closable={false}
        showHeader={false}
        className="confirm-delete-dialog"
        style={{
          width: "min(28rem, 92vw)",
          borderRadius: "1.25rem",
          backgroundColor: "#ffffff",
        }}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
        contentStyle={{
          backgroundColor: "#ffffff",
          borderRadius: "1.25rem 1.25rem 0 0",
          textAlign: "center",
        }}
        footer={footer}
      >
        <div className="mx-auto w-full text-center p-4">
          <p className="text-lg font-semibold leading-snug text-slate-800">
            {title}
          </p>
          {message ? (
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {message}
            </p>
          ) : null}
        </div>
      </Dialog>
    </>
  );
}
