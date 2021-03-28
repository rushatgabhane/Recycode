import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductGeneration from './pages/ProductgenerationPage/productGeneration'
import Login from './pages/LoginPage/Login'
import SignUp from "./pages/SignUpPage/SignUp"
import Dashboard from "./pages/Dashboard"

const RoutingTable = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={ProductGeneration} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router >
    )
}

export default RoutingTable