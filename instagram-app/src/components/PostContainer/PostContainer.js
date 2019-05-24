import React from 'react';
import './PostContainer.css';
import Post from './Post.js'

class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }

    render(){
        return (
            <div>{this.state.data.map(post =>(
                    <Post data={post} />
            ))}
            </div>
        )
    }
}

export default PostContainer;
