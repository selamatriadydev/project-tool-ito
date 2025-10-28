"use client";
import React, { useState } from "react";
import { Table, Badge, Pagination } from "react-bootstrap";
import LinkActionComponent from "@/app/components/LinkActionComponent";

export default function TableComponent  ({ header, data, actions,baseUrl }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // jumlah baris per halaman

  // Hitung total halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Ambil data sesuai halaman
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center" width="5%">No</th>
            {header.map((col) => (
              <th key={col.name} className="text-center">{col.label}</th>
            ))}
            {Object.keys(actions).length > 0 && (
              <th className="text-center" width="20%">Aksi</th>
            )}
          </tr>
        </thead>

        <tbody>
          {currentData.length > 0 ? (
            currentData.map((row, index) => (
              <tr key={row.id}>
                <td className="text-center">
                  {(indexOfFirstItem + index + 1)}
                </td>
                {header.map((col) => (
                  <td key={col.name}>
                    {col.name === "sex" ? (
                      <Badge bg={row[col.name] === "Laki-laki" ? "primary" : "success"}>
                        {row[col.name]}
                      </Badge>
                    ) : (
                      row[col.name]
                    )}
                  </td>
                ))}
                {Object.keys(actions).length > 0 && (
                  <td className="text-end">
                    {actions.detail && (
                      <LinkActionComponent
                        href={`${baseUrl || ""}/detail/${row.id}`}
                        className="me-1"
                        action="detail"
                        onClick={() => alert(`Detail ${row.nama}`)}
                      >
                        Detail
                      </LinkActionComponent>
                    )}
                    {actions.update && (
                      <LinkActionComponent
                        href={`${baseUrl || ""}/edit/${row.id}`}
                        className="me-1"
                        action="update"
                        onClick={() => alert(`Update ${row.nama}`)}
                      >
                        Update
                      </LinkActionComponent>
                    )}
                    {actions.delete && (
                      <LinkActionComponent
                        href={`${baseUrl || ""}/detail/${row.id}`}
                        className="me-1"
                        action="delete"
                        onConfirmDelete={() => alert(`Hapus ${row.nama}`)}
                      >
                        Delete
                      </LinkActionComponent>
                    )}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={header.length + 2} className="text-center text-muted">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </Table>
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
};