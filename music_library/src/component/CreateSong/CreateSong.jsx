import React, { Component } from 'react';



class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            artist: "",
            album: "",
            genre: "",
            release_date: "",
            errors: {
                title: "",
                artist: "",
                album: "",
                genre: "",
                release_date: "",
            }
         }
    }

    handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            "title": `${this.state.title}`,
            "artist": `${this.state.artist}`,
            "album": `${this.state.album}`,
            "genre": `${this.state.genre}`,
            "release_date": `${this.state.release_date}`
        }
        this.props.createSong(newSong);
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name) {
            case 'title':
                errors.title = event.target.value.length < 2 ? "Title of song must be greater then 2 characters" : null;
                break;
            case 'artist':
                errors.artist = event.target.value.length < 3 ? "Artist must be greater then 3 characters" : null;
                break;
            case 'album':
                errors.album = event.target.value.length < 3 ? "Name of Album must be greater then 3 characters" : null;
                break;
            case 'genre':
                errors.genre = event.target.value.length < 2 ? "Name of Genre must be greater then 2 characters" : null;
                break;
            case 'release_date':
                errors.release_date = event.target.value.length < 10 ? "Release Date must be a YYYY-MM-DD Format" : null;
                break;
            default:
                break;
        }
        this.setState({ 
            [event.target.name]: event.target.value,
            errors: errors  
        });
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h3 style={{color:"blue"}}> Add a New song to the Playlist </h3>
                <div>
                    <label>Song Title:  </label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                </div>
                    {this.state.errors.title ? <p style={{color:"red"}}>{this.state.errors.title}</p> : ""}
                <div>
                    <label>Song Artist:  </label>
                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
                </div>
                    {this.state.errors.artist ? <p style={{color:"red"}}>{this.state.errors.artist}</p> : ""}
                <div>
                    <label>Song Album:  </label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
                </div>
                    {this.state.errors.album ? <p style={{color:"red"}}>{this.state.errors.album}</p> : ""}
                <div>
                    <label>Song Genre:  </label>
                    <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} />
                </div>
                    {this.state.errors.genre ? <p style={{color:"red"}}>{this.state.errors.genre}</p> : ""}
                <div>
                    <label>Song Release Date:  </label>
                    <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                </div>
                    {this.state.errors.release_date ? <p style={{color:"red"}}>{this.state.errors.release_date}</p> : ""}
                <div>
                    <button type="submit"> Add Song! </button>
                </div>
            </form>
         );
    }
}
 
export default CreateSong;