 /* Add payment modal
 this modal allows users to ad payment to an invoice
 it collects payment amount and send POST API request to backend
 It handles API errors gracefully*/
 
 
 
 
 import { useState } from "react";
import API from "../services/api";

function AddPaymentModal({ invoiceId, close, refresh }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post(`/invoices/${invoiceId}/payments`, {
        amount: Number(amount)
      });

      refresh();
      close();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding payment");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Payment</h3>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <div className="modal-actions">
          <button className="secondary-btn" onClick={close}>
            Cancel
          </button>
          <button className="primary-btn" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPaymentModal;
