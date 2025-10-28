"use client";
import React from "react";
import { Button } from "react-bootstrap";

export default function DeleteComponent({ data, onDelete, onClose }) {
  return (
    <div className="text-center">
      <p>Apakah Anda yakin ingin menghapus data ini?</p>
      <p className="fw-bold">{data?.nama || "Tanpa Nama"}</p>
      <Button variant="secondary" size="md" className="me-2" onClick={onClose}>
        Batal
      </Button>
      <Button
        variant="danger" size="md"
        onClick={() => onDelete && onDelete(data)}
      >
        Ya, Hapus
      </Button>
    </div>
  );
}
