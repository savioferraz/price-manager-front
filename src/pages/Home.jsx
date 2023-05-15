import React, { useEffect } from "react";
import { useState } from "react";
import { postCsv, updateDb } from "../services/services";
import Table from "../components/Table";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusTable, setStatusTable] = useState();
  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  formData.append("csvFile", selectedFile);

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  useEffect(() => {}, [statusTable]);

  function handleValidation() {
    setLoading(true);

    postCsv(formData)
      .then((ans) => {
        setStatusTable(ans.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(`Erro: ${error.response.data}`);
        setLoading(false);
      });
  }

  const validateStatus = statusTable && statusTable.every((product) => product.status === "OK");

  function handleUpdate() {
    setLoading(true);

    updateDb(formData)
      .then(() => {
        setStatusTable();
        setLoading(false);
        alert(`Produtos atualizados com sucesso!`);
      })
      .catch((error) => {
        alert(`Erro: ${error.response.data}`);
        setLoading(false);
      });
  }

  return (
    <Wrapper>
      <h1>Validador de Preços</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div>
        <button className="validate" onClick={handleValidation} disabled={!selectedFile}>
          Validar
        </button>
        <button className="update" onClick={handleUpdate} disabled={!validateStatus}>
          Atualizar
        </button>
      </div>
      {loading ? (
        <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="80" visible={true} />
      ) : (
        <>{statusTable ? <Table statusTable={statusTable} /> : ""}</>
      )}
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
