import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Answer from "./pages/Answer";
import Question from "./pages/Question";
import Class from "./pages/Class";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <Route exact path="/Home">
                <Home  />
            </Route>
            <Route exact path="/Answer">
                <Answer  />
            </Route>
            <Route exact path="/Question">
                <Question  />
            </Route>
            <Route exact path="/Class">
                <Class  />
            </Route>
        </Switch>
    );
};

export default Routes;
