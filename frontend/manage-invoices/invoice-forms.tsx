import { jsPDF } from "jspdf"
import { Button } from 'frontend/components/button'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { SetStateAction, useEffect } from "react"
import { IInvoiceTemplate } from "../interfaces"
import * as Tabs from '@radix-ui/react-tabs'

type FormSchema = IInvoiceTemplate

type FormInvoiceCreateProps = {
    content?: IInvoiceTemplate
    setContent?: React.Dispatch<SetStateAction<IInvoiceTemplate>>
}

export const FormInvoiceCreate: React.FC<FormInvoiceCreateProps> = ({content, setContent}) => {
    const form = useForm<FormSchema>({
        defaultValues: {
            from: {
                firstName: '',
                lastName: ''
            }
        }
    })
    
    const onSubmit: SubmitHandler<FormSchema> = (data) => {
        console.log(data)
    }

    const generatePDF = () => {
        var doc = new jsPDF('p', 'pt', 'letter')
        var htmlDom = document.getElementById('previewer')
        doc.html(htmlDom, {
            callback: () => {
                doc.save(`invoice_${new Date().toISOString()}.pdf`)
            },
            margin: [0, 0, 0, 0],
            autoPaging: 'text',
            html2canvas: {
                allowTaint: true,
                letterRendering: true,
                logging: false,
                scale: 1
            }
        })
    }

    useEffect(() => {
        setContent(prevState => ({
            ...prevState,
            ...form.getValues()
        }))
    }, [form.watch])
    

    
    return (
        <div className="w-full h-full shadow-md rounded p-4">
            <form className="flex flex-col h-full space-y-6" onSubmit={form.handleSubmit(onSubmit)} >
                <div>
                    <div className='mb-4'>Invoice Credentials</div>
                    <Tabs.Root defaultValue="from">
                        <Tabs.List className="divide-x divide-white mb-2">
                            <Tabs.Trigger className="px-4 py-2 rounded-l-xl bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none data-[state='active']:bg-gray-300" value="from">From</Tabs.Trigger>
                            <Tabs.Trigger className="px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none data-[state='active']:bg-gray-300" value="to">To</Tabs.Trigger>
                            <Tabs.Trigger className="px-4 py-2 rounded-r-xl bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none data-[state='active']:bg-gray-300" value="bank-details">Bank Details</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="from">
                            <div className='flex flex-row gap-2'>
                                <Controller
                                    name='from.firstName'
                                    control={form.control}
                                    render={({field}) => (
                                        <div className="flex flex-col space-y-1">
                                            <div className='flex align-baseline justify-between'>
                                                <label>First Name</label>
                                            </div>
                                            <div className='flex flex-col'>
                                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                            </div>
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='from.lastName'
                                    control={form.control}
                                    render={({field}) => (
                                        <div className="flex flex-col space-y-1">
                                            <div className='flex align-baseline justify-between'>
                                                <label>Last Name</label>
                                            </div>
                                            <div className='flex flex-col'>
                                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <Controller
                                name='from.address'
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
                                name='from.email'
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
                                name='from.contact'
                                control={form.control}
                                render={({field}) => (
                                    <div className="flex flex-col space-y-1">
                                        <div className='flex align-baseline justify-between'>
                                            <label>Contact</label>
                                        </div>
                                        <div className='flex flex-col'>
                                            <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                        </div>
                                    </div>
                                )}
                            />
                            <Controller
                                name='from.taxRegistrationNumber'
                                control={form.control}
                                render={({field}) => (
                                    <div className="flex flex-col space-y-1">
                                        <div className='flex align-baseline justify-between'>
                                            <label>Tax Registration Number Invoice No.</label>
                                        </div>
                                        <div className='flex flex-col'>
                                            <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                        </div>
                                    </div>
                                )}
                            />
                            <Controller
                                name='from.invoiceDate'
                                control={form.control}
                                render={({field}) => (
                                    <div className="flex flex-col space-y-1">
                                        <div className='flex align-baseline justify-between'>
                                            <label>Invoice Date</label>
                                        </div>
                                        <div className='flex flex-col'>
                                            <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                        </div>
                                    </div>
                                )}
                            />
                        </Tabs.Content>

                        <Tabs.Content value="to">
                            <Controller
                                name='to.businessName'
                                control={form.control}
                                render={({field}) => (
                                    <div className="flex flex-col space-y-1">
                                        <div className='flex align-baseline justify-between'>
                                            <label>Business / Client Name</label>
                                        </div>
                                        <div className='flex flex-col'>
                                            <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                        </div>
                                    </div>
                                )}
                            />
                            <Controller
                                name='to.address'
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
                                name='to.email'
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
                                name='to.website'
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
                            <Controller
                                name='to.invoiceDue'
                                control={form.control}
                                render={({field}) => (
                                    <div className="flex flex-col space-y-1">
                                        <div className='flex align-baseline justify-between'>
                                            <label>Invoice Due</label>
                                        </div>
                                        <div className='flex flex-col'>
                                            <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                        </div>
                                    </div>
                                )}
                            />
                        </Tabs.Content>

                        <Tabs.Content value="bank-details">
                            <Controller
                                name='bankDetails.accountHolder'
                                control={form.control}
                                render={({field}) => (
                                    <div className="flex flex-col space-y-1">
                                        <div className='flex align-baseline justify-between'>
                                            <label>Account Holder</label>
                                        </div>
                                        <div className='flex flex-col'>
                                            <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                        </div>
                                    </div>
                                )}
                            />
                            <div className='flex flex-row gap-2'>
                                
                                <Controller
                                    name='bankDetails.iban'
                                    control={form.control}
                                    render={({field}) => (
                                        <div className="flex flex-col space-y-1">
                                            <div className='flex align-baseline justify-between'>
                                                <label>IBAN</label>
                                            </div>
                                            <div className='flex flex-col'>
                                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                            </div>
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='bankDetails.bank'
                                    control={form.control}
                                    render={({field}) => (
                                        <div className="flex flex-col space-y-1">
                                            <div className='flex align-baseline justify-between'>
                                                <label>Bank</label>
                                            </div>
                                            <div className='flex flex-col'>
                                                <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <Controller
                                name='bankDetails.email'
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
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
                <div className="flex flex-row space-x-2 justify-end">
                    <Button variant="default2" onClick={generatePDF}>Download PDF</Button>
                    <Button value='submit'>Save</Button>
                </div>
            </form>
        </div>
    )
}