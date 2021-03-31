import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
