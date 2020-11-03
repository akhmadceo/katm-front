import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header, SidebarMenu, Footer } from "./components";
import {
  Auth,
  Home,
  Request,
  Contract,
  Payment,
  Requests,
  RequestsView,
  Clients
} from "./views";

export default function App() {
  const [open, setOpen] = React.useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Switch>
      <Route exact path="/auth" component={Auth} />

      <div className="wrapper">
        <Header open={open} toggleSidebar={toggleSidebar} />
        <SidebarMenu open={open} toggleSidebar={toggleSidebar} />
        <div id="main">
          <div className={`container ${open ? "opened" : null}`}>
            <div className="main__content">
              <Route exact path="/" component={Home} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/request" component={Request} />
              <Route exact path="/contract" component={Contract} />
              <Route exact path="/payment" component={Payment} />
              <Route path="/requests" component={Requests} />
              <Route path="/requests-view" component={RequestsView} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Switch>
  );
}
