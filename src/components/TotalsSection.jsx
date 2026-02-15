/* Total section componenet 
this component displays invoice financial summary :
1) total amount
2) amountpaid
3) remaining balance

it recieves calculated values from backend and formats them for display */


function TotalSection({total,amountPaid,balanceDue})
{
    return(
        <div className="card totals-card"> 
            <div className="row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <div className='row paid'>
                <span>Amount Paid</span>
                <span>${amountPaid.toFixed(2)}</span>
            </div>
            <div className="row balance">
                <span>Balance Due</span>
                <span>{balanceDue.toFixed(2)}</span>
            </div>
        </div>
    );
}


export default TotalSection;