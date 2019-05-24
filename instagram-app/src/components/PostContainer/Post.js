import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from './CommentSection/CommentSection';

 class Post extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            data: props.data,
            thumbNail: props.data.thumbnailUrl,
            userName: props.data.username,
            imgUrl: props.data.imageUrl,
            comments: props.data.comments
        }
    }

    render(){
        return(
            <div className="Post">
                <div className='post-header'>
                    <img src={this.state.thumbNail} alt=""/> 
                    <h1>{this.state.userName}</h1>
                </div>
                <img src={this.state.imgUrl} alt=""/>
                <div>{this.state.comments.map((comment, i) =>(
                    <CommentSection key={i} data={comment} />
                ))}</div>  
            </div>   
        )
    }
};

// const Post = (props)=>{

//     return(
//         <div className="Post">
//             <div className='post-header'>
//                 <img src={props.data.thumbnailUrl} alt=""/> 
//                 <h1>{props.data.username}</h1>
//             </div>
//             <img src={props.data.imageUrl} alt=""/>
//             <div>{props.data.comments.map((comment, i) =>(
//                 <CommentSection key={i} data={comment}  />
//             ))}</div>  
//         </div>   
//     )
// }

Post.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.array,
        comments: PropTypes.array
    })
}

export default Post;