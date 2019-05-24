import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }
     
    render(){
        return(
            <div>
                <h1>{this.state.data.username}</h1>
                <p>{this.state.data.text}</p>
            </div>
         )
    }
}

export default CommentSection;