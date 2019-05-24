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
                <div className = "ig-logos">
                    <img src={require('./assets/ig_icon.png')} alt=""/>
                    <hr/>
                    <img src={require('./assets/ig_written_logo.png')} alt=""/>
                </div>
                
                <div>
                    <input/>
                </div>

                <div className="user-buttons">
                    <img src={require('./assets/cumpas_icon.png')} alt=""/>
                    <img src={require('./assets/heart_icon.png')} alt=""/>
                    <img src={require('./assets/user_icon.png')} alt=""/>
                </div>

            </div>
        );
    }
}

export default SearchBar;