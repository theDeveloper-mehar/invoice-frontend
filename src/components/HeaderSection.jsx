
/* Header section component

this component displays basic invoice informationm,status,customer name , issue and due date
*/



import API from "../services/api";

function HeaderSection({ invoice, refresh }) {

  const handleArchive = async () => {
    try {
      await API.post("/invoices/archive", {
        id: invoice._id
      });
      refresh();
    } catch (err) {
      alert("Error archiving invoice");
    }
  };

  const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
};

  const handleRestore = async () => {
    try {
      await API.post("/invoices/restore", {
        id: invoice._id
      });
      refresh();
    } catch (err) {
      alert("Error restoring invoice");
    }
  };

  return (
  <div className="invoice-header-card">
    <div className="invoice-header-left">
      <div className="invoice-title-row">
        <h1 className="invoice-number">
          {invoice.invoiceNumber}
        </h1>

        <span className={`badge ${invoice.status.toLowerCase()}`}>
          {invoice.status}
        </span>

        {invoice.isArchived && (
          <span className="badge archived">
            Archived
          </span>
        )}
      </div>

      <p className="customer-name">{invoice.customerName}</p>

      <div className="date-section">
        <div className="date-box">
          <p>Issue Date</p>
          <strong>{formatDate(invoice.issueDate)}</strong>
        </div>

        <div className="date-box">
          <p>Due Date</p>
          <strong>{formatDate(invoice.dueDate)}</strong>
        </div>
      </div>
    </div>

    <div className="header-right">
      {!invoice.isArchived ? (
        <button className="archive-btn" onClick={handleArchive}>
          Archive
        </button>
      ) : (
        <button className="archive-btn" onClick={handleRestore}>
          Restore
        </button>
      )}
    </div>
  </div>
);
}
export default HeaderSection;
