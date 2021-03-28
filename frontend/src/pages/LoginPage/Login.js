import React, { useState } from "react";
import Pic from './pic.svg'

export default function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, password })
        };

        fetch('http://localhost:5000/company/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    alert(data.errors[0].msg)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row justify-center h-screen items-center mx-6">
            <img className="w-4/5 sm:w-2/5 my-10" src={Pic} alt="iiest"></img>
        <form onSubmit={e => { handleSubmit(e) }} class="flex flex-col sm:w-2/5 w-full justify-center items-center lg:mx-6">
                    <input
                        className="relative h-10 input-component mb-5 w-full bg-gray-100 pl-2 focus:outline-none focus:ring focus:border-blue-300 rounded-xl"
                        name='name'
                        placeholder="Company Name"
                        value={name}
                        type='text'
                        onChange={e => setName(e.target.value)}
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
    )
}
