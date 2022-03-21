import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  toggleShowClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {showClock: !showClock}
    })
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleShowClock}
        >
          {!showClock ? 'Show Clock' : 'Hide Clock'}
        </button>
        {showClock && <Clock date="15-08-2021" />}
      </div>
    )
  }
}

export default App
