import React, { Component } from 'react';
import axios from "axios";
import "./DisplayAll.css"

class DisplayAll extends Component {
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


    render() { 
        return ( 
            <div className="allSongs">
                <table className="tablestyle">
                    <thead className="tableRows">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Song ID</th>
                    </thead>
                    <tbody>
                        {this.state.listOfSongs.map(song => {
                            return(
                                <tr>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.release_date}</td>
                                    <td>{song.id}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
            </div>
         );
    }
}
 
export default DisplayAll;