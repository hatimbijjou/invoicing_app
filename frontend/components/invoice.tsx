import { ReactNode } from "react"
import { cn } from "./utils"

interface IInvoiceContainer extends React.HTMLAttributes<HTMLDivElement> {
    children?:ReactNode[] | ReactNode
}

interface IInvoiceBody extends React.HTMLAttributes<HTMLDivElement> {
    content?: any
}

interface IInvoiceName extends React.HTMLAttributes<HTMLDivElement> {
    children?: string
}

type TInvoice = {
    container: React.FC<IInvoiceContainer>
    body: React.FC<IInvoiceBody>
    name: React.FC<IInvoiceName>
}


const Invoice: TInvoice = {
    container: () => <></>,
    body: () => <></>,
    name: () => <></>
}




Invoice.container = ({children, className, ...props}) => (
    <div className={cn(
        "group w-fit h-fit space-y-1",
        className
    )} {...props}>{children}</div>
)


Invoice.body = ({content, className, ...props}) => (
    <div className={cn(
        "h-40 w-28 shadow-md bg-white group-hover:scale-105 cursor-pointer",
        className
    )} {...props}></div>
)

Invoice.name = ({children, className, ...props}) => (
    <div className={cn(
        "text-xs group-hover:underline group-hover:cursor-pointer",
        className
    )} {...props}>{children}</div>
)


export {Invoice}