import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductGeneration from './pages/ProductgenerationPage/productGeneration'
import Login from './pages/LoginPage/Login'
import SignUp from "./pages/SignUpPage/SignUp"
import Dashboard from "./pages/Dashboard"
import ProductPage from "./pages/ProductPage/ProductPage"
import Home from "./pages/Home/Home"

const RoutingTable = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/productgeneration" component={ProductGeneration} />
            </Switch>
        </Router >
    )
}

export default RoutingTable