/* payment section component
this comoponent displays all payments made fro an invocie .
it shows payment and date and amount.
if no payments are exist it displays a message.
it allows adding a new payment */

import { useState } from "react";
import AddPaymentModal from "./AddPaymentModal";

function PaymentsSection({ payments = [], invoiceId, refresh }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <div className="payments-header">
        <h3 className="section-title">Payments</h3>
        <button className="primary-btn" onClick={() => setOpen(true)}>
          + Add Payment
        </button>
      </div>

      {/* Safe check */}
      {payments.length === 0 && <p>No payments yet</p>}

      {payments.map((p) => (
        <div key={p._id} className="payment-item">
          <div>
            <p className="payment-title">Payment received</p>
            <p className="payment-date">
              {new Date(p.paymentDate).toLocaleDateString()}
            </p>
          </div>
          <span className="paid">+${p.amount.toFixed(2)}</span>
        </div>
      ))}

      {open && (
        <AddPaymentModal
          invoiceId={invoiceId}
          close={() => setOpen(false)}
          refresh={refresh}
        />
      )}
    </div>
  );
}

export default PaymentsSection;
