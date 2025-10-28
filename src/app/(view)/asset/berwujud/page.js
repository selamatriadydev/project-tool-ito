"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";
import ContentLayout from "@/app/layouts/ContentLayout";
import TableComponentV2 from "@/app/components/table/TableComponentV2";
import ButtonActionComponent from "@/app/components/ButtonActionComponent";

import CreateModal from "@/app/(view)/asset/berwujud/component/CreateModal";
import DeleteComponent from "@/app/(view)/asset/berwujud/component/DeleteComponent";
import DetailComponent from "@/app/(view)/asset/berwujud/component/DetailComponent";
import EditComponent from "@/app/(view)/asset/berwujud/component/EditComponent";

export default function Page() {

  const header = [
    { label: "Kode", name: "kode" },
    { label: "Nama", name: "nama" },
    { label: "Jenis", name: "jenis" },
  ];

  const data = [
    { kode: "A001", nama: "Laptop Lenovo", jenis: "Elektronik" },
    { kode: "A002", nama: "Printer Epson", jenis: "Peralatan Kantor" },
  ];
  const modalComponents = {
    detail: DetailComponent,
    edit: EditComponent,
    delete: DeleteComponent,
  };

  return (
    <ContentLayout
          contentTitle="Asset Berwujud"
          breadcrumbTitle="Asset Berwujud"
          extraHeader={<ButtonActionComponent action="create" modalComponent={CreateModal} >Tambah</ButtonActionComponent>}
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Asset Berwujud", active: true },
          ]}
        >
          <TableComponentV2
            header={header}
            data={data}
            modalComponents={modalComponents}
          />
        </ContentLayout>
  );
}
