import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import AppStyles from "./App.styles";
import { StateProvider } from "./StateProvider";
import routes from './routes';
import "./assets/favicon.ico";

export default function App() {
  return (
    <StateProvider>
      <Global styles={AppStyles} />
      <Router>
        <Switch>
          {routes.map(route => {
            const { component, exact, path } = route;
            return <Route key={path} exact={exact} path={path} component={component} />;
          })}
        </Switch>
      </Router>
    </StateProvider>
  );
}
