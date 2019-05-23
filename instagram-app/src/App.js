import React from 'react';
import './App.css';

import CommentSection from './components/CommentSection/CommentSection.js'
import PostContainer from './components/PostContainer/PostContainer.js';
import SearBar from './components/SearchBar/SearchBar.js';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="App">
        <SearBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
