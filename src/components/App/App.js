import React, { Component } from 'react';
import './App.css';
import Form from '../Form'
import TrickList from '../TrickList'
import { getAllData } from '../api-call';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trickList: []
      }
      this.addTrick = this.addTrick.bind(this)
    }

  addTrick = (newTrick) => {
    this.setState({trickList: [...this.state.trickList, newTrick]})
  }

  componentDidMount = () => {
    getAllData().then(data => {
    this.setState({trickList: [...data[0]]})
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <TrickList tricks={this.state.trickList} />
      </div>
    )
  }
}
export default App;