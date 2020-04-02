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
import ContentPage from "./routes/content-page/content-page";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={ Root } />
        <Route path="/home" component={ Home } />
        <Route path="/projects" component={ ContentPage } />
        <Route path="/snippets" component={ ContentPage } />
        <Route path="/about" component={ ContentPage } />
        <Route path="/contact" component={ ContentPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
