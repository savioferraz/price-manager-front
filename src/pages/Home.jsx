import React, { useEffect } from "react";
import { useState } from "react";
import { postCsv } from "../services/services";
import Table from "../components/Table";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusTable, setStatusTable] = useState();

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  useEffect(() => {}, [statusTable]);

  function handleValidation() {
    const formData = new FormData();
    formData.append("csvFile", selectedFile);

    postCsv(formData)
      .then((ans) => {
        setStatusTable(ans.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <>
      <h1>Validador de Preços</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleValidation} disabled={!selectedFile}>
        Validar
      </button>
      <div>
        {statusTable
          ? statusTable.map((product, index) => (
              <Table
                key={index}
                productId={product.product_code}
                newPrice={product.new_price}
                status={product.status}
              />
            ))
          : ""}
      </div>
    </>
  );
}
