/* Invoice list page
this component fetches  and displays all invoices .
Ecah invoice is clickable card.
when clicked it navigates to Invoice details page.
it also involves a button to create a invoice */




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  const fetchInvoices = async () => {
    const res = await API.get("/invoices");
    setInvoices(res.data);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <div className="container">
      <div className="list-header">
        <div>
          <h1>Invoices</h1>
          <p>Manage and track your invoices</p>
        </div>
        <button className="add-btn" onClick={()=>navigate('/invoices/new')}>+ Add New Invoice</button>
      </div>

      {invoices.map(inv => (
  <div
    key={inv._id}
    className="invoice-card-modern"
    onClick={() => navigate(`/invoices/${inv._id}`)}
  >
    <div className="invoice-left">
      <div className="invoice-icon">📄</div>

      <div>
        <div className="invoice-title">
          {inv.invoiceNumber}

          <span className={`badge ${inv.status.toLowerCase()}`}>
            {inv.status}
          </span>

          {inv.isArchived && (
            <span className="badge archived">
              Archived
            </span>
          )}
        </div>

        <p className="customer-name">{inv.customerName}</p>
      </div>
    </div>

    <div className="invoice-right">
      <h3>${inv.total.toFixed(2)}</h3>
      <p className="due-text">
        Due: ${inv.balanceDue.toFixed(2)}
      </p>
    </div>
  </div>
))}
    </div>
  );
}

export default InvoiceList;
