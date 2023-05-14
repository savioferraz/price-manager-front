export default function Table({ productId, newPrice, status }) {
  return (
    <>
      <table>
        <thead>
          <th>Produto</th>
          <th>Preço</th>
          <th>Status</th>
        </thead>

        <tbody>
          <tr>
            <td>{productId}</td>
            <td>{newPrice}</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
