import styled from "styled-components";

export default function Table({ statusTable }) {
  return (
    <Wrapper>
      <table>
        <thead>
          {statusTable.length > 0 && (
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Preço Venda</th>
              <th>Preço Custo</th>
              <th>Novo Preço</th>
              <th>Ajuste</th>
              <th>Status</th>
            </tr>
          )}
        </thead>

        <tbody>
          {statusTable.map((product, index) => (
            <tr className={product.status === "OK" ? "status-ok" : "status-error"} key={index}>
              <td>{product.productCode}</td>
              <td>{product.productName.trim(12)}</td>
              <td>{product.salesPrice}</td>
              <td>{product.costPrice}</td>
              <td>{product.newPrice}</td>
              <td>{product.diff.toFixed(2)}</td>
              <td className="status">{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 16px;
  border: 1px solid grey;
  border-radius: 2px;
  font-size: 14px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    padding: 10px;
    background-color: #eee;
    font-weight: bold;
    border-bottom: 2px solid dimgray;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid gray;
    text-align: center;
  }

  .status {
    font-weight: 700;
  }

  .status-ok {
    background-color: lightgreen;
  }

  .status-error {
    background-color: #fda9a9;
  }
`;
