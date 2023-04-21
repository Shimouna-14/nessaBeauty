import { createGlobalStyle } from 'styled-components'
import '../styles/style.css'

const Body = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Abhaya'
    }
    a{
        text-decoration: none;
        color: #DDCCC5;
    }
    p { font-size: 1.25em }
`

export default Body