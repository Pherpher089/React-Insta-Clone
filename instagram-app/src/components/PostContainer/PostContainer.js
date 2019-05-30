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
        console.log('Post Container rerendering' + this.state.data)
        return (
            <div className='post-container'>{this.state.data.map((post, i) =>(
                    <Post key={i} data={post} />
            ))}
            </div>
        )
    }
}

export default PostContainer;
