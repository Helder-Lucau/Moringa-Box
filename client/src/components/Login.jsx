import React,{useState} from "react";
import "./Login.css"



const Login=()=>{
    const [formdata,setFormdata]=useState({
        username:'',
        password:'',
    });

    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }
}