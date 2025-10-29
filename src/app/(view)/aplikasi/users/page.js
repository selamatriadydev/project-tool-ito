"use client";

import { useState } from "react";
import ContentLayout from "@/app/layouts/ContentLayout";
import ButtonActionComponent from "@/app/components/ButtonActionComponent";
// import CardTable from "@/app/components/CardTable";
import CardListSubComponent from "@/app/components/card/CardListSubComponent";

import CreateModal from "@/app/(view)/aplikasi/users/component/CreateModal";
import DeleteComponent from "@/app/(view)/aplikasi/users/component/DeleteComponent";
import DetailComponent from "@/app/(view)/aplikasi/users/component/DetailComponent";
import EditComponent from "@/app/(view)/aplikasi/users/component/EditComponent";

export default function Page() { 
  const pageTitle ="Users";
  const pageDesc ="Manage Users";
  const contentTitle ="List Users";
  const data = [
    {
      id: 1,
      title: "Mamat",
      subject: "Aktif 1 hari yang lalu",
      type: "Role Admin",
      date: "2025-10-20",
    },
    {
      id: 1,
      title: "Adi",
      subject: "Sedang aktif",
      type: "Role Pengelolah Aset",
      date: "2025-10-20",
    },
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
