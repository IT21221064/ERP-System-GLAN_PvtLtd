import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddInvoice } from "../redux/actions/InvoiceAction";
import Header_bar_sales from "../components/Header_bar/Header_bar_sales";
import "../pages/Content.css"

function AddInv() {
    const [inCode, iCodechange] = useState('');
    const [iName, iNamechange] = useState('');
    const [Qty, Qtychange] = useState('');
    const [unitP, unitPchange] = useState('');
    const [itDis, itDischange] = useState('');
    const [Tot, Totchange] = useState('');
    const [subTot, subTotchange] = useState('');
    const [inDis, inDischange] = useState('');
    const [netTot, netTotchange] = useState('');
    const [crDate, CrDatechange] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handlesubmit = (e) => {
        e.preventDefault();
        const invoiceobj = { inCode, iName, Qty, unitP, itDis, Tot, subTot, inDis, netTot, crDate }
        dispatch(FunctionAddInvoice(invoiceobj));
        navigate('/invoice');

    }

    return (
        <div>
            <div><Header_bar_sales 
                            fun1="Dashboard"
                            fun2="Invoices"
                            fun3="Add Invoice"
                            fun4="Report"/>
                    </div>
                    <div className="search">
                    </div>
                    <div class="page_sub_header">
                        <t class="sub_header_topic">Create Invoices</t>
                    </div>
            <div className="ContentForm">
            <form onSubmit={handlesubmit} >
                <div>
                    <lable class="required">
                        Invoice Code:
                        <input type="text" name="iCode" value={inCode} onChange={e => iCodechange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="required">
                        Invoice Name:
                        <input type="text" name="iName" value={iName} onChange={e => iNamechange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="required">
                        Quantity:
                        <input type="text" name="Qty" value={Qty} onChange={e => Qtychange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="form">
                        Unit Price:
                        <input type="text" name="unitP" value={unitP} onChange={e => unitPchange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="form">
                        Item Discount:
                        <input type="text" name="itDis" value={itDis} onChange={e => itDischange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="form">
                        Total:
                        <input type="text" name="Tot" value={Tot} onChange={e => Totchange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="form">
                        Sub Total:
                        <input type="text" name="subTot" value={subTot} onChange={e => subTotchange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="form">
                        Invoice Discount:
                        <input type="text" name="inDis" value={inDis} onChange={e => inDischange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="form">
                        Net Total:
                        <input type="text" name="netTot" value={netTot} onChange={e => netTotchange(e.target.value)} className="form-control"></input>
                    </lable>

                    <lable class="required">
                        Create Date:
                        <input type="date" name="CrDate" value={crDate} onChange={e => CrDatechange(e.target.value)} className="form-control"></input>
                    </lable>
                </div>
                <div>
                    <button type="submit" className="submit">Submit</button>
                    <Link to={"/invoice"} className="clear">Back</Link>
                </div>
            </form>
            </div>
        </div>

    )
}

export default AddInv