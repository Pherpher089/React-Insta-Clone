import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="search-bar">
                <div className="content-container">

                    <div className = "ig-logos">
                        <img className='icon'src={require('./assets/ig_icon.png')} alt=""/>
                        <hr/>
                        <img className='written' src={require('./assets/ig_written_logo.png')} alt=""/>
                    </div>
                    
                    <div className="search-field">
                        <img src={require('./assets/spyglass_icon.png')} />
                        <input  placeholder="Search"/>
                    </div>

                    <div className="user-buttons">
                        <img src={require('./assets/cumpas_icon.png')} alt=""/>
                        <img src={require('./assets/heart_icon.png')} alt=""/>
                        <img src={require('./assets/user_icon.png')} alt=""/>
                    </div>

                </div>
            </div>
        );
    }
}

export default SearchBar;