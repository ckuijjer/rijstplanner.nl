import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-116670523-1')
ReactGA.pageview('/')

class App extends Component {
  render() {
    return <div className="App">Rijstplanner</div>
  }
}

export default App
