"use client";
import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";

export default function DetailComponent({ data }) {
  const [detailData, setDetailData] = useState({
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
  if (!data) return <p>Data tidak ditemukan.</p>;
  // Inisialisasi formData saat data diterima
    useEffect(() => {
      if (data) {
        setDetailData({
          kode_barang: data.kode_barang || "",
          nup_barang: data.nup_barang || "",
          nama_perangkat: data.nama_perangkat || "",
          jenis_perangkat: data.jenis_perangkat || "",
        });
      }
    }, [data]);

  return (
    <div>
      <Table striped bordered size="sm">
        <tbody>
          {fields.map(field => {
          const value = detailData[field.controlID];
          return(
            <tr key={field.controlID}>
              <th width="30%">{field.label}</th>
              <td>{String(value)}</td>
            </tr>
          )
          })}
        </tbody>
      </Table>
    </div>
  );
}
