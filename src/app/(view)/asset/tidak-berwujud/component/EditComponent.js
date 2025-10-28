"use client";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function EditComponent({ data, onSave,onClose }) {
  const [formData, setFormData] = useState({
      kode_barang: "",
      nup_barang: "",
      nama_perangkat: "",
      jenis_perangkat: "",
    });
  
    const fields = [
      { controlID: 'kode_barang', label: 'Kode Barang', formType: { type: 'text' }, required: true },
      { controlID: 'nup_barang', label: 'NUP Barang', formType: { type: 'text' }, required: true },
      { controlID: 'nama_perangkat', label: 'Nama Perangkat', formType: { type: 'text' }, required: true },
      { controlID: 'jenis_perangkat', label: 'Jenis Perangkat', formType: { 
          type: 'select', 
          options: [{jenis_id:1, jenis:"Controller"}], 
          key: 'jenis_id', 
          val: 'jenis' 
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

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map(field => {
        const value = formData[field.controlID];
        if (field.formType.type === 'text') {
          return (
            <Form.Group className="mb-3" key={field.controlID}>
              <Form.Label>{field.label} {field.required && (<span className="text-danger">*</span>)}</Form.Label>
              <Form.Control
                type="text"
                name={field.controlID}
                value={value}
                onChange={handleChange}
                required={field.required}
                placeholder={`Masukan ${field.label}`}
              />
            </Form.Group>
          );
        } else if (field.formType.type === 'select') {
          return (
            <Form.Group className="mb-3" key={field.controlID}>
              <Form.Label>{field.label} {field.required && (<span className="text-danger">*</span>)}</Form.Label>
              <Form.Select
                name={field.controlID}
                value={value}
                onChange={handleChange}
                required={field.required}
              >
                <option value="">Pilih {field.label}</option>
                {field.formType.options.map(opt => (
                  <option key={opt[field.formType.key]} value={opt[field.formType.key]}>
                    {opt[field.formType.val]}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          );
        }
      })}
      <div className="mt-3 d-flex justify-content-end">
        <Button variant="secondary" className="me-2" onClick={onClose}>Batal</Button>
        <Button type="submit" variant="primary" size="md">
          Simpan Perubahan
        </Button>
      </div>
    </Form>
  );
}
