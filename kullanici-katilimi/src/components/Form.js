import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import axios from "axios";

function Form(props) {

    const addUsers = props.addUsers;

    const initForm = {
        name:"",
        email:"",
        password:"",
        tos:false
    };

    const [formState, setFormState] = useState(initForm);
    const [errState, setErrState] = useState({
        name:"",
        email:"",
        password:"",
        tos:""
    });
    const [isValid, setIsValid] = useState(false);

    const inputHandler = (input) => {
        const key = input.target.name;
        const value = input.target.name != "tos" ? input.target.value : input.target.checked;
        
        Yup.reach(formSchema, key).validate(value)
            .then(r => {
                setErrState({...errState, [key]: ""});
            })
            .catch(e => {
                setErrState({...errState, [key]: e.message});
            }) 
        
        setFormState({...formState, [key]: value});
    }

    const submitHandler = (submit) => {
        submit.preventDefault();
        if(isValid){
            axios.post("https://reqres.in/api/users", formState)
                .then(r => {
                    addUsers(r.data);
                    setFormState(initForm);
                })
                .catch(e => {
                console.log(e);
                })
        }
    }

    const formSchema = Yup.object().shape({
        name: Yup
            .string()
            .required("name is required")
            .min(3, "name must be longer than 3 characters"),
        email: Yup
            .string()
            .required("email is required")
            .email("please enter valid email address"),
        password: Yup
            .string()
            .required("password is required")
            .matches(/*^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$"*/"","password doesnt meet requirements"),
        tos: Yup
            .boolean()
            .oneOf([true], "Accept the terms of service to continue")
      });

    useEffect(() => {
        formSchema.isValid(formState)
        .then(r => {
            setIsValid(r);
        })
    }, [formState]); 

    return (<form onSubmit={submitHandler}>
        <label>
            Name:
            <input name = "name" type = "text" onChange={inputHandler} value = {formState.name} />
        </label>
        <br />
        <p>{errState.name}</p>
        <label>
            Email:
            <input name = "email" type = "email" onChange={inputHandler} value = {formState.email} />
        </label>
        <br />
        <p>{errState.email}</p>
        <label>
            Password:
            <input name = "password" type = "text" onChange={inputHandler} value = {formState.password} />
        </label>
        <br />
        <p>{errState.password}</p>
        <label>
            ToS:
            <input name = "tos" type = "checkbox" onChange={inputHandler} checked = {formState.tos} /> 
        </label>        
        <p>{errState.tos}</p>
        <br />
        <button disabled = {!isValid} >Submit</button>
        <hr />
    </form>
    )
}

export default Form;