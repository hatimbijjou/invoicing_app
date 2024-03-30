import { Invoice } from "frontend/components/invoice"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="grow flex flex-col p-4">
        <div>
            <span className="capitalize text-lg font-bold">recent invoices</span>
            <div className="p-2">
                <Invoice.container onClick={() => navigate('/create-invoice')}>
                    <Invoice.body/>
                    <Invoice.name className="text-right text-gray-600">hatim bijjou</Invoice.name>
                </Invoice.container>
            </div>
        </div>
        <div>
            <span className="capitalize text-lg font-bold">frequent clients</span>
            <div className="flex flex-row gap-4">
                
            </div>
        </div>
    </div>
    )
}

export default Home