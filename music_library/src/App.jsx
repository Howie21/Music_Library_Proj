import React, { Component } from 'react';
import Header from './component/Header/Header';
import DisplayAll from './component/DisplayAll/DisplayAll';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listOfSongs: []
     }
  }

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs() {
    let songs = await axios.get("http://127.0.0.1:8000/music/");
    console.log(songs);
    this.setState({ 
      listOfSongs: songs.data
    });
    console.log(this.state.listOfSongs)
  }

  deleteSong = async (song) => {
    let songId = song.id
    await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
    this.getAllSongs();
  }


  render() { 
    return ( 
      <div className="container-fluid">
        <Header />
        <DisplayAll deleteSongMethod ={this.deleteSong} listOfSongs ={this.state.listOfSongs} />
      </div>
     );
  }
}
 
export default App;