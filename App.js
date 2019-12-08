import Login from './src/Authentication/login'
import Header from './src/Header/headerComponent'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
// function Users() {
//   return <h2>Users</h2>;
// }