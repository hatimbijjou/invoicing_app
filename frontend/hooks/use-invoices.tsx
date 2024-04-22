import axios from "axios"
import { IInvoice } from "frontend/interfaces"
import { useEffect, useState } from "react"

export const useInvoices = () => {
    const [invoices, setInvoices] = useState<IInvoice[]>([])

    const fetchInvoices = () => {
        axios.get('http://localhost:3000/api/v1/invoices')
            .then((res) => setInvoices(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchInvoices()
    },[])

    return {invoices}
}