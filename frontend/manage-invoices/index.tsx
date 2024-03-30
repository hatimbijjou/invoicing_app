import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { Invoice } from "frontend/components/invoice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageInvoices() {
    const navigate = useNavigate()
    const [invoices, setInvoices] = useState([])

  return (
    <div className="grow flex flex-col p-4">
        <div>
            <span className="capitalize text-lg font-bold">My invoices</span>
            <div className="p-2">
                {invoices && invoices.map(_ => (
                    <Invoice.container onClick={() => navigate('/create-invoice')}>
                        <Invoice.body/>
                        <Invoice.name className="text-right text-gray-600">hatim bijjou</Invoice.name>
                    </Invoice.container>
                ))}
                <div 
                    onClick={() => navigate('/create-invoice')}
                    className="group h-40 w-28 flex justify-center items-center rounded border-2 border-dashed text-gray-200 hover:scale-105 cursor-pointer"
                >
                    <PlusCircle size={48} weight={"thin"}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ManageInvoices;
