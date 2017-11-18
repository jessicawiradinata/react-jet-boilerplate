import * as React from 'react'
import { Route } from 'react-router-dom'
import App from '../App'
import HomeContainer from '../containers/home/Container'

export default () => (
  <div>
    <Route exact path='/' component={App} />
    <Route path='/home' component={HomeContainer} />
  </div>
)