import { PlusCircle } from "@phosphor-icons/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ManageClients = () => {
    const navigate = useNavigate()
    const [clients, setClients] = useState([])
    return (
        <div className="grow flex flex-col p-4">
            {/* <div>
                <span className="capitalize text-lg font-bold">My clients</span>
                <div className="p-2">
                    {clients && clients.map(_ => (
                        <></>
                    ))}
                    <div 
                        onClick={() => navigate('/')}
                        className="group h-40 w-28 flex justify-center items-center rounded border-2 border-dashed text-gray-200 hover:scale-105 cursor-pointer"
                    >
                        <PlusCircle size={48} weight={"thin"}/>
                    </div>
                </div>
            </div> */}
            prepering the page.
        </div>
    )
}

export default ManageClients