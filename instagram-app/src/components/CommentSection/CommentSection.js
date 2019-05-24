import React from 'react';
import PropTypes from 'prop-types';
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
            <div className='comment'>
                <h1>{this.state.data.username}</h1>
                <p>{this.state.data.text}</p>
            </div>
         )
    }
}

CommentSection.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;