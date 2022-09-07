import React, { Component } from 'react';
import './App.css';
import Form from '../Form'
import TrickList from '../TrickList'
import { getAllData } from '../api-call';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trickList: [ {
        id: '',
        stance: '',
        name: '',
        obstacle: '',
        tutorial: '',
      }
        ]
    }
  }

  componentDidMount = () => {
    getAllData().then(data => {
    this.setState({trickList: [...data[0]]})
    })
  }

  submitTrick = (addTrick) => {
    this.setState({trickList: [...this.trickList, addTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form submitTrick={this.submitTrick}/>
        <TrickList tricks={this.state.trickList} />
      </div>
    );
  }
}

export default App;