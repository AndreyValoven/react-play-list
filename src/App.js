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
        songs: [
          {name: 'One ', duration: 1345}, 
          {name: 'Some song', duration: 2345}, 
          {name: 'New Life', duration: 5345}
        ]
      },
      {
        name: 'Two',
        songs: [
          {name: '1', duration: 1345}, 
          {name: '2', duration: 2345}, 
          {name: '3', duration: 5345}
        ]
      },
      {
        name: 'Three',
        songs: [
          {name: '1', duration: 1345}, 
          {name: '2', duration: 2345}, 
          {name: '3', duration: 5345}
        ]
      },
      {
        name: 'Four',
        songs: [
          {name: 'Litel song', duration: 1345}, 
          {name: 'Brave', duration: 2345}, 
          {name: 'Lite man', duration: 5345}
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle,width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playLists.length} Text</h2>
      </div>
    );
  }
}

class HourCounter extends Component {
  render() {
    let allSongs = this.props.playLists.reduce((songs, eachPlayLists) => {
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
    let playList = this.props.playList;
    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block', boxShadow: "2px 2px 2px #fff"}}>
        <img/>
        <h3>{playList.name}</h3>
        <ul>
          {
            playList.songs.map(song => 
              <li>{song.name}</li>
            )
          }
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
          <PlaylistCounter playLists={this.state.serverData.user.playLists}/>
          <HourCounter playLists={this.state.serverData.user.playLists}/>
          <Filter/>
          {
            this.state.serverData.user.playLists.map(playList => 
              <PlayList playList={playList}/>
            )
          }
        </div>: <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
