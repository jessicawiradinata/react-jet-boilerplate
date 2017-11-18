import * as React from 'react'
import { Button } from 'reactstrap'
import { History } from 'history'

interface Props {
  isLoading: boolean
  history: History
  loadItems: () => void
}

interface State {}

export default class Home extends React.Component<Props, State> {
  render() {
    console.log(this.props)
    const { loadItems, isLoading, history } = this.props
    return (
      <div>
        <Button color='primary' onClick={() => loadItems()}>{isLoading ? 'Loading...' : 'Load Me'}</Button>
        <Button color='warning' onClick={() => history.push('/')}>Go Somewhere</Button>
      </div>
    )
  }
}