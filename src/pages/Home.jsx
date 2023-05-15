import React, { useEffect } from "react";
import { useState } from "react";
import { postCsv } from "../services/services";
import Table from "../components/Table";
import styled from "styled-components";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusTable, setStatusTable] = useState();

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  useEffect(() => {
    console.log(statusTable);
  }, [statusTable]);

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
    <Wrapper>
      <h1>Validador de Preços</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div>
        <button className="validate" onClick={handleValidation} disabled={!selectedFile}>
          Validar
        </button>
        <button className="update">Atualizar</button>
      </div>
      <div>{statusTable ? <Table statusTable={statusTable} /> : ""}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  box-shadow: 2px 2px 8px grey;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 20px;
  }

  div {
    display: flex;
  }

  button {
    width: 120px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .validate {
    background-color: dodgerblue;
  }

  .update {
    background-color: darkgreen;
  }
`;
