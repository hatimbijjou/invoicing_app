import { Routing } from "./layout/routing"
import { IElectronAPI } from "./interfaces"

export const App: React.FC<{electronAPI: IElectronAPI}> = ({electronAPI}) => {

    return <Routing/>
}