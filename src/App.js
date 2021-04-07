import Container from "./components/Conatainer/Container";
import Header from "./components/Header/Header";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewUser from "./components/NewUser/NewUser";
import ListUser from "./components/ListUsers/ListUsers";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/register">
            <NewUser />
          </Route>
          <Route path="/users">
            <ListUser />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App;
