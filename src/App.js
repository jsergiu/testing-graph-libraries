import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import RechartsPage from './pages/RechartsPage/RechartsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Page">
          <ul className="Nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recharts">Recharts</Link></li>
            <li><Link to="/recharts">test</Link></li>
            <li><Link to="/recharts">test</Link></li>
          </ul>
          <div className="Page-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/recharts" component={RechartsPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
