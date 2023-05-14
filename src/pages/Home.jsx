import React from "react";
import { useState } from "react";
import { postCsv } from "../services/services";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState();

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleValidation() {
    const formData = new FormData();
    formData.append("csvFile", selectedFile);

    postCsv(formData)
      .then((ans) => {
        console.log(ans.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <>
      <h1>Validador de Preços</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleValidation}>Validar</button>
    </>
  );
}
