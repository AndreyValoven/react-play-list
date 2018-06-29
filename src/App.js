import React, { Component } from 'react';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle = {
  color: defaultTextColor
}

let fakeServerdata = {
  user: {
    name: 'David',
    playLists: [
      {
        name: 'First',
        songs: [{name: '1', duration: 1345}, {name: '2', duration: 2345}, {name: '3', duration: 5345}]
      },
      {
        name: 'Two',
        songs: [{name: '1', duration: 1345}, {name: '2', duration: 2345}, {name: '3', duration: 5345}]
      },
      {
        name: 'Three',
        songs: [{name: '1', duration: 1345}, {name: '2', duration: 2345}, {name: '3', duration: 5345}]
      },
      {
        name: 'Four',
        songs: [{name: '1', duration: 1345}, {name: '2', duration: 2345}, {name: '3', duration: 5345}]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle,width: '40%', display: 'inline-block'}}>
        <h2>{this.props.palyLists.length} Text</h2>
      </div>
    );
  }
}

class HourCounter extends Component {
  render() {
    let allSongs = this.props.palyLists.reduce((songs, eachPlayLists) => {
      return songs.concat(eachPlayLists.songs) 
    } , []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div style={{ ...defaultStyle,width: '40%', display: 'inline-block'}}>
        <h2>{Math.floor(totalDuration/120)} Text</h2>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class PlayList extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block'}}>
        <img/>
        <h3>PlayList Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} }
  }

  componentDidMount() {
    this.setState({
      serverData: fakeServerdata
    });
  }

  render() {
    return (
      <div className="App">
      {this.state.serverData.user ?
        <div>
          <h1>
            { this.state.serverData.user.name}'s PlayList
          </h1>
          <PlaylistCounter palyLists={this.state.serverData.user.playLists}/>
          <HourCounter palyLists={this.state.serverData.user.playLists}/>
          <Filter/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
        </div>: <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
