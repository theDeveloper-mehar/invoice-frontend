/*  Invoice details page 
this component displays complete details of a single invoice.
 it fetches invoice data using the invoice ID from URL.

 it shows header section, lineitem table, total section , paymets section

 this refreshes function re-renders updated dat aafter adding payment , archiving  and restoring  */




import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';
import API from '../services/api';
import HeaderSection from '../components/HeaderSection';
import LineItemsTable from '../components/LineItemsTable';
import TotalSection from '../components/TotalsSection';
import PaymentsSection from '../components/PaymentSection';

function InvoiceDetails()
{
    const {id} = useParams();
    const [data,setData] = useState(null);

    const fetchInvoice = async()=>
    {
        const res = await API.get(`/invoices/${id}`);
        setData(res.data);
    };

    useEffect(()=>
    {
        fetchInvoice();
    },[id]);

    if(!data)
    {
        return <p>Loading....</p>;
    }

    return(
        <div className="container">
            <HeaderSection invoice={data.invoice} refresh={fetchInvoice} />
            <LineItemsTable items={data.lineItems}/>
            <TotalSection total={data.total}
            amountPaid = {data.amountPaid}
            balanceDue = {data.balanceDue}/>
            <PaymentsSection
            payments={data.payments}
            invoiceId={id}
            refresh={fetchInvoice}
            />
        </div>
    );
}

export default InvoiceDetails;