import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {timer: '25:00', status: 'Paused', count: 25}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  start = () => {
    const {status} = this.state
    if (status !== 'running') {
      this.intervalId = setInterval(this.tick, 1000)
      this.setState({status: 'running'})
    }
  }

  pause = () => {
    clearInterval(this.intervalId)
    this.setState({status: 'Paused'})
  }

  tick = () => {
    const {timer} = this.state
    let mins = parseInt(timer.slice(0, 2), 10)
    let secs = parseInt(timer.slice(3, 5), 10)

    if (secs === 0) {
      if (mins === 0) {
        clearInterval(this.intervalId)
        this.setState({timer: '00:00', status: 'Paused'})
        // return
      } else {
        mins -= 1
        secs = 59
      }
    } else {
      secs -= 1
    }

    const newTimer = `${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    this.setState({timer: newTimer})
  }

  reset = () => {
    clearInterval(this.intervalId)
    this.setState({timer: '25:00', count: 25, status: 'Paused'})
  }

  reduceTimer = () => {
    const {count, status} = this.state
    if (status !== 'running') {
      if (count > 1) {
        const newCount = count - 1
        const newTimer = `${newCount.toString().padStart(2, '0')}:00`
        this.setState({count: newCount, timer: newTimer})
      }
    }
  }

  increaseTimer = () => {
    const {count, status} = this.state
    if (status !== 'running') {
      if (count < 60) {
        const newCount = count + 1
        const newTimer = `${newCount.toString().padStart(2, '0')}:00`
        this.setState({count: newCount, timer: newTimer})
      }
    }
  }

  render() {
    const {timer, status, count} = this.state
    return (
      <div className="DigitalTimer__container">
        <h1>Digital Timer</h1>
        <div className="DigitalTimer__inner__container">
          <div className="DigitalTimer__timer">
            <h1>{timer}</h1>
            <p>{status}</p>
          </div>

          <div className="btn__container">
            <div className="btn__container__1">
              {status === 'Paused' ? (
                <button className="btn digital__icons" onClick={this.start}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                  />
                  <p>Start</p>
                </button>
              ) : (
                <button className="btn digital__icons" onClick={this.pause}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause icon"
                  />
                  <p>Pause</p>
                </button>
              )}
              <button className="btn digital__icons" onClick={this.reset}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p>Reset</p>
              </button>
            </div>

            <div>
              <p>Set Timer limit</p>
              <div className="btn__container__1">
                <button onClick={this.reduceTimer} className="counterBtn">
                  -
                </button>
                <div className="count">{count}</div>
                <button onClick={this.increaseTimer} className="counterBtn">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
