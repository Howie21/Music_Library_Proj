import React, { Component } from 'react';
import axios from "axios";


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
            listOfSongs: songs.data.data    
        });
        console.log(this.listOfSongs)
    }


    render() { 
        return ( 
            <div style={{padding:"24px"}}>
                <h3>All Songs</h3>
            </div>
         );
    }
}
 
export default DisplayAll;