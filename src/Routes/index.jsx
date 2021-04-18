import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Views/Home";
import Dashboard from "../Views/Dashboard";
import Config from "../Views/Config";
import NoMatch from "../Views/NoMatch";
export default function Routes(){
    return (
        <Router>
            <Switch>
                 <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>    
                <Route path="/config">
                    <Config/>
                </Route>
                <Route path="/*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>);
}


