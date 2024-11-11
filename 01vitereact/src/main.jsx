import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
// import App from './App.jsx'

// function MyApp() {
//     return (
//         <div>
//             <h1>Custom React!</h1>
//         </div>
//     )
// }

// My Method
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// Following syntax
// const anotherElemnt = (
//     <a href='https://google.com' target='_blank'>Visit google</a>
// )

const anotheruser = " chai aur react"

// Major syntax
const reactElement = React.createElement(
    'a', //element tag
    { href: 'https://google.com', target: '_blank' },  //attribute
    'Click me to visit google',  //text
    anotheruser  //another element
)

createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    // reactElement
    // anotherElemnt
    reactElement
)
