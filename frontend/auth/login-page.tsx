import { Button } from "frontend/components/button"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import ErrorMessageList, { ServerErrorsType, useServerErrors } from "frontend/hooks/use-server-errors"

type FormSchema = {
    emailOrUsername: string,
    password: string
}

const LoginPage = () => {
    const navigate = useNavigate()
    const form = useForm<FormSchema>({
        defaultValues: {
            emailOrUsername: '',
            password: ''
        }
    })
    const [apiErrors, setApiErrors] = useState<ServerErrorsType>({})
    const errors = useServerErrors(apiErrors, form)

    const onSubmit: SubmitHandler<FormSchema> = (values) => {
        console.log(values)
        if (values.emailOrUsername && values.password) {
            axios.post('http://localhost:3000/api/v1/login', values)
                .then((res) => {
                    localStorage.setItem('token', res.data?.token)
                    navigate('/')
                })
                .catch((err: any) => {
                    setApiErrors(err.response.data)
                })
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[350px] flex flex-col bg-gray-50 rounded-lg shadow-lg">
                <div className="bg-gray-200 p-4 rounded-t-lg">login</div>
                <form className="p-4 flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <Controller
                        name='emailOrUsername'
                        control={form.control}
                        render={({field}) => (
                            <div className="flex flex-col space-y-1">
                                <div className='flex align-baseline justify-between'>
                                    <label>Email Or Username</label>
                                </div>
                                <div className='flex flex-col'>
                                    <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                </div>
                            </div>
                        )}
                    />
                    <Controller
                        name='password'
                        control={form.control}
                        render={({field}) => (
                            <div className="flex flex-col space-y-1">
                                <div className='flex align-baseline justify-between'>
                                    <label>Password</label>
                                </div>
                                <div className='flex flex-col'>
                                    <input type="password" className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                </div>
                            </div>
                        )}
                    />
                    <ErrorMessageList errors={errors.detailErrors}/>
                    <Button type="submit">submit</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage