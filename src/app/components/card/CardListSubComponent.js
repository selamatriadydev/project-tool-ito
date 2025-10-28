"use client";

import { useState } from "react";
import { Card, Badge, Collapse,Modal, Pagination } from "react-bootstrap";
import '@/app/components/card/CardListSub.css';

import ButtonTableComponent from "../ButtonTableComponent";
export default function CardListSubComponent({items, modalComponents = {}}) {
  const [openId, setOpenId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // jumlah card utama per halaman
  // 🧮 Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // const items = [
  //   {
  //     id: 1,
  //     title: "Quadratic Equations",
  //     subject: "Algebra - Core Competency 1",
  //     type: "document",
  //     date: "2025-10-20",
  //     subItems: [
  //       {
  //         title: "Introduction to Quadratics",
  //         subject: "Algebra - Core Competency 1",
  //         type: "presentation",
  //         date: "2025-10-20",
  //       },
  //       {
  //         title: "Solving Quadratics",
  //         subject: "Algebra - Core Competency 1",
  //         type: "video",
  //         date: "2025-10-21",
  //       },
  //     ],
  //   },
  // ];

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

  const getBadgeColor = (type) => {
    switch (type) {
      case "document":
        return "#e0e7ff";
      case "presentation":
        return "#d1fae5";
      case "video":
        return "#f3e8ff";
      default:
        return "#e5e7eb";
    }
  };

  const toggleSubList = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container my-4">
      {currentItems.map((item) => (
        <div key={item.id} className="mb-3">
          {/* CARD UTAMA */} 
          <Card
            className="border-0 shadow-sm resource-card p-3 rounded-4"
            
          >
            <div className="d-flex align-items-center justify-content-between">
              {/* Kiri */}
              <div className="d-flex align-items-center">
                {item?.subItems?.length > 0 && (
                  <i
                    onClick={(e) => {
                      e.stopPropagation(); // ⛔ mencegah klik ini memicu toggle parent
                      toggleSubList(item.id);
                    }}
                    style={{ cursor: "pointer" }}
                    className={`me-2 bi ms-2 ${
                      openId === item.id ? "bi-chevron-up" : "bi-chevron-down"
                    }`}
                  ></i>
                )}

                <i
                  className="bi bi-folder-fill fs-3 text-primary me-3"
                  style={{ flexShrink: 0 }}
                ></i>
                <div>
                  <h6 className="mb-1 fw-semibold">{item.title}</h6>
                  <small className="text-muted">{item.subject}</small>
                </div>
              </div>

              {/* Kanan */}
              <div className="d-flex align-items-center">
                <Badge
                  pill
                  className="text-capitalize me-3"
                  style={{
                    backgroundColor: getBadgeColor(item.type),
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  {item.type}
                </Badge>
                <small className="text-muted me-3">{item.date}</small>
                <span>
                  {modalComponents &&
                  Object.entries(modalComponents).map(([type, Component]) => {
                    return <ButtonTableComponent key={type} action={type} onClick={() => openModal(type, item)} />
                  })}
                </span>
                {/* <i className="bi bi-pencil-square text-secondary me-3" role="button"></i>
                <i className="bi bi-trash3 text-danger" role="button"></i> */}
              </div>
            </div>
          </Card>
          {/* SUB CARD (COLLAPSE) */}
          {item?.subItems?.length > 0 && (
          <Collapse in={openId === item.id}>
            <div className="mt-2 ps-5">
              {item.subItems.map((sub, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-sm sub-card p-3 rounded-4 mb-2"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    {/* Kiri */}
                    <div className="d-flex align-items-center">
                      <i
                        className="bi bi-file-earmark-text fs-4 text-secondary me-3"
                        style={{ flexShrink: 0 }}
                      ></i>
                      <div>
                        <h6 className="mb-1 fw-normal">{sub.title}</h6>
                        <small className="text-muted">{sub.subject}</small>
                      </div>
                    </div>

                    {/* Kanan */}
                    <div className="d-flex align-items-center">
                      <Badge
                        pill
                        className="text-capitalize me-3"
                        style={{
                          backgroundColor: getBadgeColor(sub.type),
                          color: "#fff",
                          fontWeight: "500",
                        }}
                      >
                        {sub.type}
                      </Badge>
                      <small className="text-muted me-3">{sub.date}</small>
                      <i className="bi bi-info-square text-secondary me-3" role="button"></i>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Collapse>
          )}
        </div>
      ))}


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
      {/* === PAGINATION === */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
}
