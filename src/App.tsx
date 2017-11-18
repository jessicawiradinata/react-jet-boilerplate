import * as React from 'react'
import './App.css'
import { Button } from 'reactstrap'
import { History } from 'history'

interface Props {
  history: History
}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    console.log(this.props)
    const { history } = this.props
    return (
      <div className='App'>
        <Button color='danger' onClick={() => history.push('/home')}>Go Home</Button>
      </div>
    )
  }
}

export default App
