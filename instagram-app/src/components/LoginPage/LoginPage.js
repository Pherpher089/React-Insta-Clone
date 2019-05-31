import React from 'react'
import './LoginPage.css'

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="container">
                <img src={require( "../SearchBar/assets/ig_written_logo.png")} alt=""/>
                <form onSubmit={this.props.OnSubmit}>
                    <input type='text' 
                        placeholder='Phone number, username, or email' 
                        onChange={this.props.ChangeHandler}
                        name='username' 
                        value={this.props.username}
                    />
                    <input type="text" 
                        placeholder='Password' 
                        onChange={this.props.ChangeHandler} 
                        name='password' 
                        value={this.props.password}
                    />
                    <button >Log In</button>
                </form>

                <div>
                    <h3>Don't have an account?</h3>
                    <a href='https://www.google.com/'>Sign Up</a>
                </div>
            </div>
        );
    }
}

export default LoginPage;