import { Routing } from "./utilities/routing"
import { IElectronAPI } from "./interfaces"

export const App: React.FC<{electronAPI: IElectronAPI}> = ({electronAPI}) => {

    return <Routing/>
}