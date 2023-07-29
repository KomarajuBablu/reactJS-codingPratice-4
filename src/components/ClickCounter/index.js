import {component} from 'react'
import './index.css'

class ClickCounter extends component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">
          The Button been has clicked
          <span className="count"> 0 </span> times
        </h1>
        <p className="description"> Click the to increase the count </p>
        <button className="button" type="button">
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
