import React from 'react'
import Head from '../components/Head'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'

export default class Main extends React.Component {
  render() {
    return (
    <html>
      <Head title='test webpack4 and react' />
      <body>
        react body!!!
    <Router>
    <Switch>
    <Route path='/' component={Home}/>
    <Route path='/about' component={About}/>
    </Switch>
    </Router>      
      </body>
    </html>
    )
  }
}
