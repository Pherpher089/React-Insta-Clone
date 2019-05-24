import React from 'react';
import './PostContainer.css'
import CommentSection from './CommentSection/CommentSection';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }

    render(){
        return(
            <div>
                <div className='post-header'>
                    <img src={this.state.data.thumbnailUrl} alt=""/> 
                    <h1>{this.state.data.username}</h1>
                </div>
                <img src={this.state.data.imageUrl} alt=""/>
                <div>{this.state.data.comments.map(comment =>(
                    <CommentSection data={comment} />
                ))}</div>  
            </div>   
        )
    }
}

export default Post;