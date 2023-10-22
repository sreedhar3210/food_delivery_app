import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = await JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            location: credentials.geolocation
        });
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: object
        });
        if(response.ok){
            const text = await response.text();
            console.log(text);
        }else{
            alert("enter valid credentials");
        }
    }

    const onChange = (event) => {
        //so here onChange method is called whenever some particular form's data is changed and using useState,
        //we are updating the value of credentials.
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
        console.log(event.target.name + "changed to " + event.target.value);
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className='form-label'>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='email' value={credentials.email} onChange={onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className='form-label'>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name='password' value={credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className='form-label'>Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress1"
                        name='geolocation' value={credentials.geolocation} onChange={onChange} />
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>login</Link>
            </form>
        </div>
    )
}

