import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./contaimers/PageNotFound";
import { routesHome, routesAdmin } from "./routes";

import './App.css';

import HomeTemplate from "./template/HomeTemplate";


function App() {
  const showMenusHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {showMenusHome(routesHome)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
