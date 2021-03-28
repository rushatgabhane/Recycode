import React from "react";

export default function Dashboard() {

    fetch('http://localhost:5000/api/dashboard')
        .then(response => response.json())
        .then(data => {
            if (data.errors) {
                alert(data.errors[0].msg)
            }
        })
        .catch((err) => {
            console.log(err);
        })

    return (
        <label>DASHBOARD</label>
    )
}
