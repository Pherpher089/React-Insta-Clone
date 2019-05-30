import React from 'react'

const WithAuthenticate = App => class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                data: props.data
            }
        }
        render(){
            return <App data={this.state.data}/>
        }
    }

export default WithAuthenticate