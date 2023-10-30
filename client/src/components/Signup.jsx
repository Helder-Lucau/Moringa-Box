import React,{useState} from "react";
import './Signup.css'

const Signup=(e)=>{
    const[formdata,setFormdata]=useState({
        username:'',
        email:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();//prevennting the page from reloading once forms are filled.
        //Link to the database.
    }

}