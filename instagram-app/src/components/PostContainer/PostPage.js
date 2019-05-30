import React from 'react';
import './PostContainer.css';

import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar';

class PostPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            searchValue: '',
            postToRender: props.data
        }
    }

    changeHandeler = event =>{
        this.setState({searchValue: event.target.value})
    }

    SearchPosts = (search) =>{
        let newData = [];
    
        if(search === '')
        {
          return this.state.postToRender;
        }
    
        for(let i=0; i<this.state.postToRender.length; i++)
        {
          for(let j=0; j< search.length; j++)
          {
            if(this.state.postToRender[i].username[j] === search[j])
            {
              if(j === search.length - 1)
              {
                newData.push(this.state.postToRender[i]);
              }
            }
          }
        }
        return newData;
    }

    render(){
        return(
            <div className="App">
                <SearchBar searchValue={this.state.searchValue} changeHandeler={this.changeHandeler} />
                <PostContainer data = {this.state.postToRender} />
            </div>
        )
    }
}

export default PostPage;