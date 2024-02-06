import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Play from './views/play'
import Minter from './views/minter'
import Home from './views/home'
import Game from './views/game'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Play} exact path="/play" />
        <Route component={Minter} exact path="/minter" />
        <Route component={Home} exact path="/" />
        <Route component={Game} exact path="/game" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
