import { useEffect } from "react"
import { Routing } from "./layout/routing"
import { IElectronAPI } from "./interfaces"

export const App: React.FC<{electronAPI: IElectronAPI}> = ({electronAPI}) => {
    useEffect(() => {
        console.log(electronAPI)
    }, [])

    return <Routing/>
}