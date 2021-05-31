import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import EffectorInitializer from './HOCs/EffectorInitializer'

ReactDOM.render(
    <React.StrictMode>
        <EffectorInitializer>
            <App />
        </EffectorInitializer>
    </React.StrictMode>,
    document.getElementById('root'),
)
