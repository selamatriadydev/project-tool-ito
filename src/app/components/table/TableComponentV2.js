"use client";
import React, { useState } from "react";
import { Table, Button, Modal,Pagination } from "react-bootstrap";
import ButtonTableComponent from "../ButtonTableComponent";

export default function TableComponentV2({ header, data, modalComponents = {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // jumlah baris per halaman
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  // Hitung total halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Ambil data sesuai halaman
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const openModal = (type, row) => {
    // pastikan komponen untuk tipe modal ini tersedia
    if (!modalComponents[type]) {
      alert("Anda tidak punya akses!!")
      return;
    }
    setModalType(type);
    setSelectedRow(row);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
    setSelectedRow(null);
  };

  const ActiveModalComponent = modalType ? modalComponents[modalType] : null;

  return (
    <>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center" width="5%">No</th>
            {header.map((h, i) => (
              <th key={i}>{h.label}</th>
            ))}
            {modalComponents && Object.keys(modalComponents).length > 0 && (
              <th style={{ width: "180px" }}>Aksi</th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentData && currentData.length > 0 ? (
            currentData.map((row, i) => (
              <tr key={i}>
                <td className="text-center">
                  {(indexOfFirstItem + i + 1)}
                </td>
                {header.map((h, j) => (
                  <td key={j}>{row[h.name]}</td>
                ))}
                {modalComponents && Object.keys(modalComponents).length > 0 && (
                <td>
                  {modalComponents &&
                    Object.entries(modalComponents).map(([type, Component]) => {
                      return <ButtonTableComponent key={type} action={type} onClick={() => openModal(type, row)} />
                    })}
                </td>

                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={header.length + 1} className="text-center">
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal Dinamis */}
      {ActiveModalComponent && (
        <Modal show={showModal} onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {modalType ? modalType.charAt(0).toUpperCase() + modalType.slice(1) : ""} Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ActiveModalComponent data={selectedRow} onClose={closeModal} />
          </Modal.Body>
        </Modal>
      )}
      {totalPages > 1 && (
        <Pagination size="sm" className="justify-content-end">
          <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      )}
    </>
  );
}
