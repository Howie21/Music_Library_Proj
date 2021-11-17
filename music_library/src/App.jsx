import React, { Component } from 'react';
import Header from './component/Header/Header';
import DisplayAll from './component/DisplayAll/DisplayAll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  render() { 
    return ( 
      <div>
        <Header />
        <DisplayAll />
      </div>
     );
  }
}
 
export default App;