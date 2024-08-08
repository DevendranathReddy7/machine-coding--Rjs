import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: '00:00'}

  start = () => {
    this.clearID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {timer} = this.state

    // Extract minutes and seconds
    let minutes = Number(timer.slice(0, 2))
    let seconds = Number(timer.slice(3, 5))

    // Increment seconds
    seconds += 1

    // Check if seconds have reached 60
    if (seconds === 60) {
      minutes += 1 // Increment minutes
      seconds = 0 // Reset seconds
    }

    // Format the new time
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const newTime = `${formattedMinutes}:${formattedSeconds}`

    // Update the state
    this.setState({timer: newTime})
  }

  stop = () => {
    clearInterval(this.clearID)
    // this.setState()
  }

  reset = () => {
    clearInterval(this.clearID)

    this.setState({timer: '00:00'})
  }

  render() {
    const {timer} = this.state
    return (
      <div className="stp__watch__container">
        <h1>Stopwatch</h1>
        <div className="watch__container">
          <div className="watch__heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>

          <h1>{timer}</h1>

          <div>
            <button
              className="watch__btn start"
              type="button"
              onClick={this.start}
            >
              Start
            </button>
            <button
              className="watch__btn stop"
              type="button"
              onClick={this.stop}
            >
              Stop
            </button>
            <button
              className="watch__btn reset"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
