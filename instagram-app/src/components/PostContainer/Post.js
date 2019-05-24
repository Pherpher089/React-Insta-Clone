import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';

 class Post extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            data: props.data,
            likes: props.data.likes,
            timeStamp: props.data.timestamp,
            thumbNail: props.data.thumbnailUrl,
            userName: props.data.username,
            imgUrl: props.data.imageUrl,
            comments: props.data.comments
        }
    }

    render(){
        return(
            <div className="post">
                <div className='post-header'>
                    <img className='thumb-nail'src={this.state.thumbNail} alt=""/> 
                    <h1>{this.state.userName}</h1>
                </div>

                <div className='post-content'>
                    <img className='post-img' src={this.state.imgUrl} alt=""/>
                    <h1>{this.state.likes} Likes</h1>
                </div>
    
                <div className='comment-section'>
                    {this.state.comments.map((comment, i) =>(
                    <CommentSection key={i} data={comment} />
                    ))}
                    <h1 className='time-stamp'>{this.state.timeStamp}</h1>
                </div> 
                <form className='add-comment'>   
                    <input type='text' placeholder="Add a comment..." />
                </form>
            </div>   
        )
    }
};

Post.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        comments: PropTypes.array
    })
}

export default Post;