import React,{useState} from "react";
import "./Login.css"



const Login=()=>{
    const [formdata,setFormdata]=useState({
        username:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault()//prevent reloading of page once input fields are filled

        //Link to the database.
    }
}