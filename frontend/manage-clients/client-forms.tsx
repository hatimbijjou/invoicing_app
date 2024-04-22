import { ArrowLeft } from "@phosphor-icons/react"
import axios from "axios"
import { IClient } from "frontend/interfaces"
import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


type FormSchema = IClient

export const ClientPage: React.FC = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const form = useForm<FormSchema>({
        defaultValues: {
            name: '',
            email: '',
            address: '',
            website: ''
        }
    })
    const [client, setClient] = useState<IClient>()

    const fetchClient = () => {
        axios.get(`http://localhost:3000/api/v1/clients/${id}`)
            .then((res) => setClient(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchClient()
    }, [])

    useEffect(() => {
        form.reset({...client})
    }, [client])

    return (
        <div className="grow flex flex-col p-4">
            <div className="mb-4">
                <ArrowLeft className="cursor-pointer" onClick={() => navigate('/manage-clients')}/>
            </div>
            <div className="space-y-4 w-1/3">
                <span className="capitalize text-lg font-bold">Client Details</span>
                <Controller
                    name='name'
                    control={form.control}
                    render={({field}) => (
                        <div className="flex flex-col space-y-1">
                            <div className='flex align-baseline justify-between'>
                                <label>Client Name</label>
                            </div>
                            <div className='flex flex-col'>
                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                            </div>
                        </div>
                    )}
                />
                <Controller
                    name='email'
                    control={form.control}
                    render={({field}) => (
                        <div className="flex flex-col space-y-1">
                            <div className='flex align-baseline justify-between'>
                                <label>Email</label>
                            </div>
                            <div className='flex flex-col'>
                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                            </div>
                        </div>
                    )}
                />
                <Controller
                    name='address'
                    control={form.control}
                    render={({field}) => (
                        <div className="flex flex-col space-y-1">
                            <div className='flex align-baseline justify-between'>
                                <label>Address</label>
                            </div>
                            <div className='flex flex-col'>
                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                            </div>
                        </div>
                    )}
                />
                <Controller
                    name='website'
                    control={form.control}
                    render={({field}) => (
                        <div className="flex flex-col space-y-1">
                            <div className='flex align-baseline justify-between'>
                                <label>Website</label>
                            </div>
                            <div className='flex flex-col'>
                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}