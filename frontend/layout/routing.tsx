import { HashRouter, Outlet, Route, Routes } from "react-router-dom"
import { Layout } from "./layout"
import InvoiceCreator from "frontend/manage-invoices/invoice-creator"
import Home from "frontend/home"
import ManageInvoices from "frontend/manage-invoices"
import ManageClients from "frontend/manage-clients"

export const Routing = () => {
    return(
        <HashRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/manage-invoices" element={<ManageInvoices/>}></Route>
                    <Route path="/create-invoice" element={<InvoiceCreator/>}></Route>
                    <Route path="/manage-clients" element={<ManageClients/>}></Route>
                </Route>
            </Routes>
        </HashRouter>
    )
}