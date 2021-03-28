import React, { useState } from "react";
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
        <form onSubmit={e => { handleSubmit(e) }} class="flex justify-center h-screen items-center">
            <div class='flex max-w-sm w-full h-64 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-5'>
                <br />
                < div class="relative h-10 input-component mb-5 w-full">
                    <input
                        name='name'
                        placeholder="Company Email"
                        value={email}
                        type='text'
                        onChange={e => setEmail(e.target.value)}
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
