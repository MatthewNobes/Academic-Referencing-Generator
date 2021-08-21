import './css/App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './Components/main-pages/Home';
import ReferenceGenerator from './Components/main-pages/ReferenceGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <nav>
        <Router className="React-Router">
        <div>
          <ul className="React-Router-Group">
            <li className="React-Router-Headlinks">
              <Link className="React-Router-Links" to="/">Home</Link>
            </li>
            <li className="React-Router-Headlinks">
              <Link className="React-Router-Links" to="/ReferenceGenerator">Reference Generator</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/ReferenceGenerator">
              <ReferenceGenerator />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </Router>
      </nav>
      <footer className="App-Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;