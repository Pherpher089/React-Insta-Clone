import React from 'react'

const WithAuthenticate = App => LoginPage => class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            isLoggedIn: false,
            username: '',
            password: ''
        }

        localStorage.setItem('username', 'pherpher089')
        localStorage.setItem('password', 'LambdaSchool19')
    }

    ChangeHandler = event =>{
        this.setState({[event.target.name]: event.target.value}); 
    }

    OnSubmit = event =>{
        event.preventDefault();
        console.log('submit!')
        if(this.state.username === localStorage.getItem('username')){

            if(this.state.password === localStorage.getItem('password')){
                this.setState({isLoggedIn: true});
                console.log('Correct User and pass')
            }
            else
            {
                console.log('Incorrect Password')
            }
        }
        else{
            console.log('Incorrect Username')
        }
    }

    render(){
        if(this.state.isLoggedIn){
            return <App data={this.state.data}/>
        }
        else{
            return <LoginPage password={this.state.password} username={this.state.username} ChangeHandler={this.ChangeHandler} OnSubmit={this.OnSubmit}/>
        }
    }    
}

export default WithAuthenticate;