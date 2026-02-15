/* Line items table componen
this component displays all line of invocies in table format
each row shows description , quantity , quantity , unit price , line total.
this values are formatted to two decimal values */





function LineItemsTable({ items }) {
  return (
    <div className="card">
      <h3 className="section-title">Line Items</h3>

      <table className="invoice-table">
        <thead>
          <tr>
            <th className="left">Description</th>
            <th className="center">Qty</th>
            <th className="right">Unit Price</th>
            <th className="right">Line Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item._id}>
              <td className="left">{item.description}</td>
              <td className="center">{item.quantity}</td>
              <td className="right">
                ${item.unitPrice.toFixed(2)}
              </td>
              <td className="right strong">
                ${item.lineTotal.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LineItemsTable;

