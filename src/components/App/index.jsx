import React, { Fragment, useState } from 'react'
import { Router, Route, browserHistory, BrowserRouter, Switch } from 'react-router-dom'

import Home from '../Home'
import Menu from '../Menu'
import './styles'

const App = () => {
  const [state, setState] = useState({
    isMenu: false,
  });

  const handleMenu = () => setState({ ...state, isMenu: !state.isMenu });

  return (
    <Fragment>
      <BrowserRouter history = { browserHistory }>
        <Switch>
          <Route exact path="/" component={ () => <Home handleMenu={handleMenu} /> } />
        </Switch>
      </BrowserRouter>
      <Menu active={state.isMenu} handleMenu={handleMenu} />
    </Fragment>
  )
};

export default App
