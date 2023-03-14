import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {
    displayContent: true,
    displayLeftNavbar: true,
    displayRightNavbar: true,
  }

  toggleContent = () => {
    this.setState(prevState => ({displayContent: !prevState.displayContent}))
  }

  toggleLeftNavbar = () => {
    this.setState(prevState => ({
      displayLeftNavbar: !prevState.displayLeftNavbar,
    }))
  }

  toggleRightNavbar = () => {
    this.setState(prevState => ({
      displayRightNavbar: !prevState.displayRightNavbar,
    }))
  }

  render() {
    const {displayContent, displayLeftNavbar, displayRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent: displayContent,
          showLeftNavbar: displayLeftNavbar,
          showRightNavbar: displayRightNavbar,
          onToggleShowContent: this.toggleContent,
          onToggleShowLeftNavbar: this.toggleLeftNavbar,
          onToggleShowRightNavbar: this.toggleRightNavbar,
        }}
      >
        <div className="app-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
