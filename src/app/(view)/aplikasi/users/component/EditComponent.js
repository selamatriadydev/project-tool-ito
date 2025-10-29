"use client";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";

export default function EditComponent({ data, onSave,onClose }) {
  const [formData, setFormData] = useState({
      kode_barang: "",
      nup_barang: "",
      nama_perangkat: "",
      jenis_perangkat: "",
    });
  
    const fields = [
        { controlID: 'Username', label: 'Username', formType: { type: 'text' }, required: true },
        { controlID: 'password', label: 'Password', formType: { type: 'password' }, required: true },
        { controlID: 'role_id', label: 'Role', formType: { 
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    if (onClose) onClose();
  };

  // Inisialisasi formData saat data diterima
  useEffect(() => {
    if (data) {
      setFormData({
        kode_barang: data.kode_barang || "",
        nup_barang: data.nup_barang || "",
        nama_perangkat: data.nama_perangkat || "",
        jenis_perangkat: data.jenis_perangkat || "",
      });
    }
  }, [data]);
  return <ItemForm
        fields={fields}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClose={onClose}
      />
}
