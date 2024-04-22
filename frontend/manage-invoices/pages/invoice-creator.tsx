import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"
import { useNavigate } from "react-router-dom"
import { FormInvoiceCreate } from "../invoice-forms"
import InvoicePreviewer from "../components/invoice-previewer"
import { useState } from "react"
import { IInvoiceTemplate } from "frontend/interfaces"

const InvoiceCreator = () => {
    const navigate = useNavigate()
    const [invoice, setInvoice] = useState<IInvoiceTemplate>({})

    return (
        <div className="grow p-4">
            <div className="mb-4">
                <ArrowLeft className="cursor-pointer" onClick={() => navigate('/manage-invoices')}/>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 min-h-40 gap-4">
                <div className="col-span-3 lg:col-span-2">
                    <FormInvoiceCreate content={invoice} setContent={setInvoice}/>
                </div>
                <div className="col-span-3 lg:col-span-4">
                    <InvoicePreviewer content={invoice}/>
                </div>
            </div>
        </div>
    )
}

export default InvoiceCreator