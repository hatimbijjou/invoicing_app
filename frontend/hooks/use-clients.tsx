import axios from "axios"
import { IClient } from "frontend/interfaces"
import { useEffect, useState } from "react"

export const useClients = () => {
    const [clients, setClients] = useState<IClient[]>([])

    const fetchClients = () => {
        axios.get('http://localhost:3000/api/v1/clients')
            .then((res) => setClients(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchClients()
    },[])

    return {clients}
}