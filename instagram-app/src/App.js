import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'

import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

const data = dummyData;

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data = {data} />
      </div>
    );
  }
}

export default App;
