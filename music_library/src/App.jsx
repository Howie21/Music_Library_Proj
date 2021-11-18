import React, { Component } from 'react';
import Header from './component/Header/Header';
import DisplayAll from './component/DisplayAll/DisplayAll';
import axios from 'axios';
import CreateSong from './component/CreateSong/CreateSong';

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

  createSong = async (song) => {
    await axios({
      method: 'post',
      url: "http://127.0.0.1:8000/music/",
      headers: {},
      data: song
    });
    this.getAllSongs();
  }


  render() { 
    return ( 
      <div className="container-fluid">
        <Header />
        <DisplayAll deleteSongMethod ={this.deleteSong} listOfSongs ={this.state.listOfSongs} />
        <CreateSong createSong={this.createSong} />
      </div>
     );
  }
}
 
export default App;