import React, { useState } from "react";
import Pic from './pic.svg'

import { useHistory } from "react-router-dom"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        fetch('http://localhost:5000/api/company/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    alert(data.errors[0].msg)
                }
                else {
                    // goes to dashboard after logging in
                    history.push({
                        pathname: `/dashboard`,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row justify-center h-screen items-center mx-6">
            <img className="w-4/5 sm:w-2/5 my-10" src={Pic} alt="login"></img>
            <div className="sm:w-2/5 w-full lg:mx-6">
            <div className="flex items-center ">
                <div className="flex items-end mx-2">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-5 bg-blue-500"></div>
                <div className="w-3 h-7 bg-green-500"></div>
                </div>
                <h2 className="text-2xl my-4">Login</h2>
            </div>
        <form onSubmit={e => { handleSubmit(e) }} className="flex flex-col justify-center items-center">
                    <input
                        className="relative h-10 input-component mb-5 w-full bg-gray-100 pl-2 focus:outline-none focus:ring focus:border-blue-300 rounded-xl"
                        name='name'
                        placeholder="Company Email"
                        value={email}
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className="relative h-10 input-component mb-5 w-full bg-gray-100 pl-2 focus:outline-none focus:ring focus:border-blue-300 rounded-xl"
                        name='password'
                        placeholder="Password"
                        value={password}
                        type='text'
                        onChange={e => setPassword(e.target.value)}
                    />
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold h-10 w-36 sm:w-full rounded-xl my-4 shadow-lg sm:my-2 ">
                    Submit
                </button>
        </form >
        </div>
        </div>
    )
}
