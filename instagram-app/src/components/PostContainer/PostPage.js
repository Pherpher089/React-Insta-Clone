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
      console.log(this.SearchPosts(event.target.value))
      this.setState({searchValue: event.target.value, postToRender: this.SearchPosts(event.target.value)})
    }

    SearchPosts = (search) =>{
        let newData = [];
    
        if(search === '')
        {
          return this.props.data;
        }
    
        for(let i=0; i<this.props.data.length; i++)
        {
          for(let j=0; j< search.length; j++)
          {
            if(this.props.data[i].username[j] === search[j])
            {
              if(j === search.length - 1)
              {
                newData.push(this.props.data[i]);
              }
            }
          }
        }
        console.log('Search Data: ' + newData);
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