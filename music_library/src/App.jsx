import React, { Component } from 'react';
import Header from './component/Header/Header';
import DisplayAllSongs from './component/DisplayAllSongs/DisplayAllSongs';
import axios from 'axios';
import CreateSong from './component/CreateSong/CreateSong';
import FilterTable from './component/FilterTable/FilterTable';

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
    this.setState({ 
      listOfSongs: songs.data
    });
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
        <DisplayAllSongs deleteSongMethod ={this.deleteSong} listOfSongs ={this.state.listOfSongs} />
        <CreateSong createSong={this.createSong} />
        <FilterTable getAllSongs={this.getAllSongs} />
      </div>
     );
  }
}
 
export default App;