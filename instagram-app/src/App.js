import React from 'react';
import dummyData from './dummy-data.js'
import PostPage from './components/PostContainer/PostPage.js'
import WithAuthenticate from './components/authentication/WithAuthenticate'
import LoginPage from './components/LoginPage/LoginPage'
import './App.css';


const data = dummyData;
const ComponentFromWithAuthenticate = WithAuthenticate(PostPage)(LoginPage)

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchValue: '',
      postToRender: data,
    }
  }

  //TBH i dont think this does a thing...
  componentDidMount(){
    this.setState({postToRender: data})
  }

  render(){
    return (
      <div className="App">
        <ComponentFromWithAuthenticate data={this.state.postToRender} />
      </div>
    );
  }
}

export default App;
