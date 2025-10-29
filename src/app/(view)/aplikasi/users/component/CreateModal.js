"use client";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ItemForm from "./ItemForm";
export default function CreateModal({ show, onClose, onCreate }) {
  const pageTitle = "Data"
  const [formData, setFormData] = useState({
    kode_barang: "",
    nup_barang: "",
    nama_perangkat: "",
    jenis_perangkat: "",
  });

  const fields = [
    { controlID: 'Username', label: 'Username', formType: { type: 'text' }, required: true },
    { controlID: 'password', label: 'Password', formType: { type: 'password' }, required: true },
    { controlID: 'role', label: 'Role', formType: { 
        type: 'select', 
        options: [{role_id:1, role:"Admin"}, {role_id:1, role:"Pengelolah Aset"}], 
        key: 'role_id', 
        val: 'role' 
      }, 
      required: false 
    },
    { controlID: 'status', label: 'Status', formType: { 
        type: 'select', 
        options: [{status_id:1, status:"Aktif"}, {status_id:2, status:"Tidak Aktif"}], 
        key: 'status_id', 
        val: 'status' 
      }, 
      required: false 
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCreate) onCreate(formData); // kirim data ke parent
    onClose(); // tutup modal
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>New {pageTitle}</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <ItemForm
              fields={fields}
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onClose={onClose}
            />
        </Modal.Body>
    </Modal>
  );
}
