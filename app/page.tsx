"use client";
import "./style.css";
import { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
export default function Home() {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <div className="App">
      <div className="card">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
