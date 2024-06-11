import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";



function NewCampain () {


    const [values, setValues] = useState({
        name:"",
        location:"",
        date:"",
        manager:""

    })



    const handleSubmit = (e) => {

        e.preventDefault();
        
        axios.post("http://localhost:8081/NewCampain", values)
        .then(res =>console.log(res))
        .then( err =>console.log(err))
    }


 return (
    <div>

        <h2>newCamapain</h2>
    
    </div>
 )
}


export default NewCampain