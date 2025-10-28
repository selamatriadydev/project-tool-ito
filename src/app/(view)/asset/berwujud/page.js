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
  const pageTitle ="Asset Berwujud";
  const data = [
    {
      id: 1,
      title: "Lenovo",
      subject: "100002 NUP 103 Tahun 2022",
      type: "Laptop",
      date: "2025-10-20",
      subItems: [
        {
          title: "Sensus 2025",
          subject: "Lenovo xyx",
          type: "PIC Mamat",
          date: "2025-10-20",
        },
        {
          title: "Sensus 2022",
          subject: "Lenovo xyz",
          type: "PIC ADI",
          date: "2025-10-20",
        },
      ],
    },
    {
      id: 2,
      title: "ACER",
      subject: "100002 NUP 105 Tahun 2022",
      type: "Server",
      date: "2025-10-20",
      subItems: [
        {
          title: "Sensus 2025",
          subject: "ACER xyx",
          type: "PIC Mamat",
          date: "2025-10-20",
        },
        {
          title: "Sensus 2022",
          subject: "ACER xyz",
          type: "PIC ADI",
          date: "2025-10-20",
        },
      ],
    },
    {
      id: 2,
      title: "ACER",
      subject: "100002 NUP 105 Tahun 2022",
      type: "Server",
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
    desc: "Manage Asset Berwujud",
    content: <ButtonActionComponent action="create" modalComponent={CreateModal} >{pageTitle}</ButtonActionComponent>,
  }
  return (
    <ContentLayout
          contentTitle={`Daftar ${pageTitle} (${data.length})`}
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
