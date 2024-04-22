import { useClients } from "frontend/hooks/use-clients"
import { useNavigate } from "react-router-dom"
import { ClientCard } from "../components/client-card"


const ManageClients = () => {
    const navigate = useNavigate()
    const {clients} = useClients()


    return (
        <div className="grow flex flex-col p-4">
            <div className="space-y-4">
                <span className="capitalize text-lg font-bold">My clients</span>
                <div className="grid grid-cols-6 space-x-6">
                    {clients && clients.map((client, index) => (
                        <ClientCard
                            key={index} 
                            onClick={() => navigate(`/manage-clients/${client.id}`)} 
                            client={client}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManageClients