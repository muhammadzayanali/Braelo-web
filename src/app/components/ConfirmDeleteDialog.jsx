"use client";

import React from "react";
import { Dialog } from "primereact/dialog";

const dialogStyles = `
  .confirm-delete-dialog.p-dialog {
    background-color: #ffffff;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  .confirm-delete-dialog .p-dialog-header,
  .confirm-delete-dialog .p-dialog-content,
  .confirm-delete-dialog .p-dialog-footer {
    background-color: #ffffff;
  }
  .confirm-delete-dialog .p-dialog-content {
    text-align: center !important;
    border-radius: 0.5rem;
    padding: 1.25rem 1.25rem 0.5rem !important;
  }
  .confirm-delete-dialog .p-dialog-footer {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    width: 100% !important;
    gap: 0.75rem !important;
    padding: 0.75rem 1.25rem 1.25rem !important;
    border-radius: 0 0 0.5rem 0.5rem;
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
    <div className="flex w-full flex-row gap-3">
      <button
        type="button"
        onClick={handleHide}
        disabled={confirmLoading}
        className="w-full rounded-lg bg-gray-200 py-2.5 text-center text-sm font-medium text-gray-800 transition hover:bg-gray-300 disabled:opacity-50"
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        onClick={onConfirm}
        disabled={confirmLoading}
        className="w-full rounded-lg bg-red-500 py-2.5 text-center text-sm font-medium text-white transition hover:bg-red-600 disabled:opacity-50"
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
        className="confirm-delete-dialog rounded-lg"
        style={{
          width: "min(400px, 92vw)",
          borderRadius: "0.5rem",
          backgroundColor: "#ffffff",
        }}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        contentStyle={{
          backgroundColor: "#ffffff",
          borderRadius: "0.5rem 0.5rem 0 0",
          textAlign: "center",
        }}
        footer={footer}
      >
        <div className="mx-auto w-full max-w-sm text-center text-lg text-gray-800">
          <p className="font-medium leading-snug">{title}</p>
          {message ? (
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{message}</p>
          ) : null}
        </div>
      </Dialog>
    </>
  );
}
