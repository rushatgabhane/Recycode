import React, { useState } from "react";

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
        <form onSubmit={e => { handleSubmit(e) }} class="flex justify-center h-screen items-center">
            <div class='flex max-w-sm w-full h-64 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-5'>
                <br />
                < div class="relative h-10 input-component mb-5 w-full">
                    <input
                        name='name'
                        placeholder="Company Name"
                        value={name}
                        type='text'
                        onChange={e => setName(e.target.value)}
                    />
                    <br />
                </div>
                < div class="relative h-10 input-component mb-5 w-full">
                    <input
                        name='password'
                        placeholder="Password"
                        value={password}
                        type='text'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                </ div>
                <button class="md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
                    Submit
                </button>
            </div>
        </form >
    )
}
