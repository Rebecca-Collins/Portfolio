import axios from "axios";

import React from 'react'

function Contact() {

    axios
    .post("https://getform.io/f/6235b1a2-1648-4c13-9983-28ce6e82e802", {
        message: "Hello, World",
    }, 
    { headers: {'Accept': 'application/json'}})
    .then(response => console.log(response))
    .catch(error => console.log(error))

  return (
    <div>Contact</div>
  )
}

export default Contact