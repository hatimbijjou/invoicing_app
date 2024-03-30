import { App } from 'frontend'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Theme } from '@radix-ui/themes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(<Theme><App/></Theme>)