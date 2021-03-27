import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductGeneration from './pages/ProductgenerationPage/productGeneration'
import Login from './pages/LoginPage/Login'
import SignIn from "./pages/SignInPage/Signin"

const RoutingTable = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={ProductGeneration} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signin" component={SignIn} />
            </Switch>
        </Router >
    )
}

export default RoutingTable