import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components'

const PostDiv = styled.div`
    width: 70rem;
    margin-top: 3rem;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border: 1px solid lightgrey;
`
const PostHeaderDiv = styled.div`
    height: 6rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const PostImg = styled.img`
    width: 100%;
`

const ThumbNailImg = styled.img`
    margin: 1rem 2rem 1rem 2rem;
    border-radius: 100px;
    height: 4rem;
    width: 4rem;
`

const UserNameH1 = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`
const PostContentDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;    
`

const IconsDiv = styled.div`
    margin-left: 1rem;
`
const CommentSectionDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
`
const AddCommentForm = styled.form`
    width: 100%;
    height: 5em;
    border:1px solid lightgrey;
    border-bottom: none;
    display: flex;
    align-items: center;
`
const TimeStampH1 = styled.h1`
    font-size: .9rem;
    color: grey;
    margin-left: 1rem;
    margin-bottom: 1rem;
`

const AddCommentInput = styled.input`
    border: none;
    margin-left: 1rem;
    &:focus{
        outline: none;
    }
`

const IconImg = styled.img`
    margin-left: 1rem;
`
const LikesH1 = styled.h1`
    margin-top: 0;
    font-size: 1.5rem;
    margin-left: 1rem;
`

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
            <PostDiv /*className="post"*/>
                <PostHeaderDiv /*className='post-header'*/>
                    <ThumbNailImg className='thumb-nail'src={this.state.thumbNail} alt=""/> 
                    <UserNameH1>{this.state.userName}</UserNameH1>
                </PostHeaderDiv>

                <PostContentDiv>
                    <PostImg src={this.state.imgUrl} alt=""/>
                    <IconsDiv className='icons'>
                        <IconImg className={` heart ${this.IsLiked(true)}`} src={require('./icons/post_heart_icon.png')} alt="" onClick={this.OnLike}/>

                        <IconImg className={`heart ${this.IsLiked(false)}`} src={require('./icons/post_heart_liked_icon.png')} alt="" onClick={this.OnLike}/>

                        <IconImg className="icon" src={require('./icons/message_icon.png')} alt=""/>
                    </IconsDiv>
                    <LikesH1>{this.state.likes} Likes</LikesH1>
                </PostContentDiv>
    
                <CommentSectionDiv>
                    {this.state.comments.map((comment, i) =>(
                    <CommentSection key={i} data={comment} />
                    ))}
                    <TimeStampH1>{this.state.timeStamp}</TimeStampH1>
                </CommentSectionDiv> 
                <AddCommentForm onSubmit={this.AddComment}>   
                    <AddCommentInput type='text' placeholder="Add a comment..." value={this.state.addComment} onChange={this.changeHandeler} />
                </AddCommentForm>
            </PostDiv>   
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