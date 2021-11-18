import React, { Component } from 'react';
import axios from "axios"

import "./FilterTable.css"


// function FilterTable(props) {
//     return ( 
        // <div className="tableContainer">
        //     <span className="dropDownBar"> 
        //         Select what you wish to Filter by:   
        //         <select name="filterType" value="Select Filter Type" className="dropDownList">
        //             <option value="title">Title</option>
        //             <option value="artist">Artist</option>
        //             <option value="album">Album</option>
        //             <option value="genre">Genre</option>
        //             <option value="release_date">Release Date</option>
        //         </select>
        //         <br/>
        //         Input Title/Artist/etc.
        //         <input name="filterSubmit"  />
        //         <button type="submit">Submit Filter</button>    
        //     </span>
        //     <table className="filterTableDisplay">
        //         <thead>
        //             <th>Artist</th>
        //         </thead>
        //     </table>
        // </div>
//      );
// }

// export default FilterTable;

class FilterTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userFilterType: "",
            userFilterInput: "",
            filteredSongs: [],
            listOfSongs: [],
            errors: {
                userFilterType: "",
                userFilterInput: ""
            }
         }
    }

    componentDidMount() {
         this.getAllSongs();
        
    }

    async getAllSongs() {
        let songs= await axios.get("http://127.0.0.1:8000/music/");
        this.setState({
            listOfSongs: songs.data
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Filtering Music...")
        let functionFilter = this.state.listOfSongs.filter(song => {
            if(song[this.state.userFilterType] === this.state.userFilterInput) {
                return true;
            } else {
                return false;
            }
        })
        this.setState({ 
            filteredSongs: functionFilter    
        });
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name) {
            case 'userFilterType':
                errors.userFilterType = event.target.value.length < 2 ? "" : null;
                break;
            case 'userFilterInput':
                errors.userFilterInput = event.target.value.length < 3 ? "Input must be greater then 3 characters" : null;
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
            <div className="tableContainer">
            <span className="dropDownBar"> 
                Select what you wish to Filter by:   
                <select name="userFilterType" onChange={this.handleChange} value={this.state.userFilterType} className="dropDownList">
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="genre">Genre</option>
                    <option value="release_date">Release Date</option>
                </select>
                <br/>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    Input Title/Artist/etc.
                    <input name="userFilterInput" onChange={this.handleChange} value={this.state.userFilterInput} />
                    <button type="submit">Submit Filter</button> 
                </form>
                    
            </span>
            <table className="filterTableDisplay">
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Song ID</th>
                </thead>
                <tbody>
                {this.state.filteredSongs.map(song => {
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
 
export default FilterTable;