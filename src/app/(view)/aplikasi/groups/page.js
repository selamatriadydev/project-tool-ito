"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";
import ContentLayout from "@/app/layouts/ContentLayout";
import TableComponentV2 from "@/app/components/table/TableComponentV2";
import ButtonActionComponent from "@/app/components/ButtonActionComponent";
// import CardTable from "@/app/components/CardTable";
import CardListSubComponent from "@/app/components/card/CardListSubComponent";

import CreateModal from "@/app/(view)/asset/berwujud/component/CreateModal";
import DeleteComponent from "@/app/(view)/asset/berwujud/component/DeleteComponent";
import DetailComponent from "@/app/(view)/asset/berwujud/component/DetailComponent";
import EditComponent from "@/app/(view)/asset/berwujud/component/EditComponent";

export default function Page() { 
  const pageTitle ="Groups";
  const pageDesc ="Manage Groups";
  const contentTitle ="List Groups";
  const data = [
    {
      id: 1,
      title: "Admin",
      subject: "Aktif 1 user",
      type: "Aktif",
      date: "2025-10-20",
      subItems: [
        {
          title: "Modul Aset",
          subject: "Mengelolah Aset",
          type: "Aktif",
          date: "2025-10-20",
        },
        {
          title: "Tool",
          subject: "Mengelolah Tool",
          type: "Aktif",
          date: "2025-10-20",
        },
      ],
    },
    {
      id: 2,
      title: "Pengelolah Aset",
      subject: "Aktif 5 user",
      type: "Tidak Aktif",
      date: "2025-10-20",
      subItems: [
        {
          title: "Modul Aset",
          subject: "Mengelolah Aset",
          type: "Aktif",
          date: "2025-10-20",
        },
      ],
    }
  ];
  
  const modalComponents = {
    detail: DetailComponent,
    edit: EditComponent,
    delete: DeleteComponent,
  };
  const info = {
    title: pageTitle,
    desc: pageDesc,
    content: <ButtonActionComponent action="create" modalComponent={CreateModal} >{pageTitle}</ButtonActionComponent>,
  }
  return (
    <ContentLayout
          contentTitle={`${contentTitle} (${data.length})`}
          info={info}
        >
          {/* <TableComponentV2
            header={header}
            data={data}
            modalComponents={modalComponents}
          /> */}
          <CardListSubComponent items={data} modalComponents={modalComponents} />
        </ContentLayout>
  );
}
