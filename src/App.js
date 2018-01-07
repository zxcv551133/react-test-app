import React from 'react'
import Header from './Header'
import Content from './Content'
import './App.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header title={this.props.headerTitle} />
        <Content title={this.props.contentTitle}
          body={this.props.contentBody} />
      </div>
    )
  }
}

export default App
