import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  // Route,
  // Link
} from "react-router-dom";
import './App.scss';

// === ROUTES ===
import Root from "./routes/root/root";
import Home from "./routes/home/home";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={ Root } />
        <Route path="/home" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
