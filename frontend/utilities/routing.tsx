import { HashRouter, Outlet, Route, Routes } from "react-router-dom"
import { Layout } from "../layout/layout"
import InvoiceCreator from "frontend/manage-invoices/pages/invoice-creator"
import Home from "frontend/home"
import ManageInvoices from "frontend/manage-invoices/pages/invoice-manager"
import LoginPage from "frontend/auth/login-page"
import { AuthMiddelware } from "frontend/auth/auth-controller"
import { ClientPage } from "frontend/manage-clients/client-forms"
import ManageClients from "frontend/manage-clients/pages/client-manager"
import { FormInvoiceDetails } from "frontend/manage-invoices/pages/invoice-details"

export const Routing = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path="/account-login" element={<LoginPage/>}/>
                <Route element={
                    <AuthMiddelware>
                        <Layout/>
                    </AuthMiddelware>
                }>
                    <Route path="/" element={<Home/>}></Route>
                    {/* manage invoices */}
                    <Route path="/manage-invoices" element={<ManageInvoices/>}></Route>
                    <Route path="/manage-invoices/create" element={<InvoiceCreator/>}></Route>
                    <Route path="/manage-invoices/:id" element={<FormInvoiceDetails/>}></Route>
                    {/* manage clients */}
                    <Route path="/manage-clients" element={<ManageClients/>}></Route>
                    <Route path="/manage-clients/create" element={<></>}></Route>
                    <Route path="/manage-clients/:id" element={<ClientPage/>}></Route>
                </Route>
            </Routes>
        </HashRouter>
    )
}