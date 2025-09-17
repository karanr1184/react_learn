import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//! Run this element in directly in create root... But we don't know the exact key-value pair react expects.
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "karan"

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: "_blank"},
  'Click me to visit google: ',
  anotherUser //* The variables are evaluated over here
)

createRoot(document.getElementById('root')).render(
    // <App />

    //* This works directly
    // anotherElement

    //* This also works
    reactElement
)
