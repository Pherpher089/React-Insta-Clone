import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'

import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

const data = dummyData;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchValue: 'gay'
    }
  }

  changeHandeler = event =>{
    console.log(event.target.value);
    this.setState({searchValue: event.target.value})
  }
  render(){
    console.log(this.state.searchValue);
    return (
      <div className="App">
        <SearchBar searchValue={this.state.searchValue} changeHandeler={this.changeHandeler} />
        <PostContainer data = {data} />
      </div>
    );
  }
}

export default App;
