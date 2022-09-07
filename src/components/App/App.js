import React, { Component } from 'react';
import './App.css';
// import { getAllData } from '../api-call'
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
        // {
        // stance: "regular",
        // name: "treflip",
        // obstacle: "flat ground",
        // tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
        // id: 1
        // },
        // {
        // stance: "switch",
        // name: "heelflip",
        // obstacle: "stairs",
        // tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
        // id: 2
        // },
        // {
        // stance: "regular",
        // name: "frontside 50-50, backside 180 out",
        // obstacle: "ledge",
        // tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
        // id: 3
        // }
        ]
    }
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
        <TrickList tricks={this.state.trickList} />
      </div>
    );
  }
}

export default App;