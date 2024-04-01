import { App } from 'frontend'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Theme } from '@radix-ui/themes';
import { IElectronAPI } from 'frontend/interfaces';

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Theme>
    <App electronAPI={window.electronAPI}/>
  </Theme>
)