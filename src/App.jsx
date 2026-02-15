import { Routes, Route } from "react-router-dom";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetails from "./pages/InvoiceDetails";
import Login from "./pages/Login";
import NewInvoice from './pages/NewInvoice';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/invoices" element={
        <ProtectedRoute>
        <InvoiceList />
        </ProtectedRoute>
        } />
      <Route path ='/invoices/new' element={
        <ProtectedRoute>
        <NewInvoice/>
        </ProtectedRoute>}/>
      <Route path="/invoices/:id" element={
        <ProtectedRoute>
        <InvoiceDetails />
        </ProtectedRoute>} />
      
    </Routes>
  );
}

export default App;
