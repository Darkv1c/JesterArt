import App from './App'
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css'

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
)