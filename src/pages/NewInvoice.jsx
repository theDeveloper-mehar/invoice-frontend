/*
new invoice page 

this page allow users to create a new invoice 
it manages inovice details such as:
1) Invocie number
2) customer name
3)issue date
4) due date
5)items
it calculates total on frontend 
on submission it sends a data to backend through post api
*/




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function NewInvoice() {
  const navigate = useNavigate();

  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [items, setItems] = useState([
    { description: "", quantity: 1, unitPrice: 0 }
  ]);

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, unitPrice: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  const handleSubmit = async () => {
    try {
     const res = await API.post("/invoices", {
  invoiceNumber,
  customerName,
  issueDate,
  dueDate,
  lineItems: items
});

      console.log("Invoice Created:", res.data);
      navigate("/invoices");
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      alert("Error creating invoice");
    }
  };

return (
  <div className="create-wrapper">
    <div className="create-card">

      <h2>Create New Invoice</h2>
      <p className="subtitle">
        Fill in the details to create a new invoice.
      </p>
  <div className="form-group">
  <label>Invoice Number</label>
  <input
    placeholder="e.g. INV-001"
    value={invoiceNumber}
    onChange={(e) => setInvoiceNumber(e.target.value)}
  />
</div>
      <div className="form-group">
        <label>Customer Name</label>
        <input
          placeholder="e.g. Acme Corp"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="date-row">
        <div className="form-group">
          <label>Issue Date</label>
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="line-header">
        <h3>Line Items</h3>
        <button className="add-item-btn" onClick={addItem}>
          + Add Item
        </button>
      </div>

      {items.map((item, index) => (
        <div key={index} className="line-item-row">

          <div className="form-group flex-2">
            <label>Description</label>
            <input
              placeholder="Service description"
              value={item.description}
              onChange={(e) =>
                handleItemChange(index, "description", e.target.value)
              }
            />
          </div>

          <div className="form-group flex-1">
            <label>Qty</label>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", Number(e.target.value))
              }
            />
          </div>

          <div className="form-group flex-1">
            <label>Unit Price</label>
            <input
              type="number"
              value={item.unitPrice}
              onChange={(e) =>
                handleItemChange(index, "unitPrice", Number(e.target.value))
              }
            />
          </div>

        </div>
      ))}

      <div className="total-section">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>

      <div className="button-row">
        <button
          className="cancel-btn"
          onClick={() => navigate("/invoices")}
        >
          Cancel
        </button>

        <button className="create-btn" onClick={handleSubmit}>
          Create Invoice
        </button>
      </div>

    </div>
  </div>
);

}

export default NewInvoice;


  