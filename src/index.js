import React from 'react';
import ReactDOM from 'react-dom';
import {Link,BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './templates/Home.js'
import About from './templates/About.js'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header text="Welcome My Home!">
      </Header>
      <Router>
        <div>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
        </ul>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        </div>
      </Router>      
    </div>
    
  );

}

export default App;
ReactDOM.render(<App />,document.getElementById("app"));
