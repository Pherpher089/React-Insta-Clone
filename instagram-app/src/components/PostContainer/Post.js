import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';


 class Post extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            id: props.data.id,
            likes: props.data.likes,
            timeStamp: props.data.timestamp,
            thumbNail: props.data.thumbnailUrl,
            userName: props.data.username,
            imgUrl: props.data.imageUrl,
            comments: props.data.comments,
            addComment: '',
            isLiked: false
        }
    }

    AddComment = (event)=> {

        event.preventDefault();
        if(this.state.addComment === '')
        {
            return;
        }

        let newComment = {
            username: "Pherpher089",
            text: this.state.addComment
        }

        let newComments = [...this.state.comments, newComment]

        this.setState({comments: newComments, addComment: ''});
    };

    changeHandeler = event =>{
        console.log(event.target.value);
        this.setState({addComment: event.target.value})
    }

    OnLike = ()=>{
        if(!this.state.isLiked)
        {
            this.setState({likes: this.state.likes + 1, isLiked: true})
            return
        }

        this.setState({likes: this.state.likes - 1, isLiked: false})
    }

    IsLiked = (x)=>{

        if(x)
        {
            if(this.state.isLiked)
            {
                return 'liked'
            }
    
            return ''
        }
        else{
            if(this.state.isLiked)
        {
            return ''
        }

        return 'liked'
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
                    <div className='icons'>
                        <img className={`icon heart ${this.IsLiked(true)}`} src={require('./icons/post_heart_icon.png')} alt="" onClick={this.OnLike}/>
                        <img className={`icon heart ${this.IsLiked(false)}`} src={require('./icons/post_heart_liked_icon.png')} alt="" onClick={this.OnLike}/>
                        <img className="icon" src={require('./icons/message_icon.png')} alt=""/>
                    </div>
                    <h1>{this.state.likes} Likes</h1>
                </div>
    
                <div className='comment-section'>
                    {this.state.comments.map((comment, i) =>(
                    <CommentSection key={i} data={comment} />
                    ))}
                    <h1 className='time-stamp'>{this.state.timeStamp}</h1>
                </div> 
                <form className='add-comment' onSubmit={this.AddComment}>   
                    <input type='text' placeholder="Add a comment..." value={this.state.addComment} onChange={this.changeHandeler} />
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