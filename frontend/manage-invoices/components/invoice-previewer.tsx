import { IInvoiceTemplate } from "frontend/interfaces"

type InvoicePreviewerProps = {
    content?: IInvoiceTemplate

}

const InvoicePreviewer: React.FC<InvoicePreviewerProps> = ({content}) => {
    const {title, from, to, bankDetails} = content

    return (
        <div className="flex justify-center w-full h-full shadow-md rounded p-4">
            <div id="previewer" className="shadow-lg w-[38rem] h-[48rem] px-12 py-12">
                <div className="flex flex-col h-full space-y-6 text-[11px] pb-4">
                    <div className="text-center font-bold text-xl uppercase mb-2">{title ?? "Invoice"}</div>
                    <div className="flex flex-row space-x-4">
                        <div className="w-1/2">
                            <p className="underline text-zinc-600 mb-2">From</p>
                            <p>Name: {from?.firstName + ' ' + from?.lastName}</p>
                            <p>Address: {from?.address}</p>
                            <p>Email: {from?.email}</p>
                            <p>Contact: {from?.contact}</p>
                            <p>Tax Registration Number Invoice No.: {from?.taxRegistrationNumber}</p>
                            <p>Invoice Date: {from?.invoiceDate}</p>
                        </div>
                        <div>
                            <p className="underline text-zinc-600 mb-2">To</p>
                            <p>Business / Client Name: {to?.businessName}</p>
                            <p>Address: {to?.address}</p>
                            <p>Email: {to?.email}</p>
                            <p>Website: {to?.website}</p>
                        </div>
                    </div>
                    <div className="grow"></div>
                    <div className="">
                        <p className="underline text-zinc-600 mb-2">Bank Details</p>
                        <p>Account Holder: {bankDetails?.accountHolder}</p>
                        <p>IBAN: {bankDetails?.iban}</p>
                        <p>Bank: {bankDetails?.bank}</p>
                        <p>Email: {bankDetails?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoicePreviewer