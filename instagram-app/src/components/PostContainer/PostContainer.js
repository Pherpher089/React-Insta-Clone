import React from 'react';
import './PostContainer.css';
import Post from './Post.js'
import styled from 'styled-components'

const PostContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }

    render(){
        return (
            <PostContainerDiv >{this.props.data.map((post, i) =>(
                    <Post key={i} data={post} />
            ))}
            </PostContainerDiv>
        )
    }
}

export default PostContainer;
