import React, { Fragment} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


function Index() {

return (
<Fragment>

<App />

</Fragment>

)

}

const rootElement = document.getElementById("root"); 
//reader method for react
ReactDOM.render(<Index />, rootElement)