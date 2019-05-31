import React from 'react';
import styled from 'styled-components'

const SearchBarDiv = styled.div`
    background: white;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    height: 7rem;
`
const ContentContainerDiv = styled.div`
    width: 80rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
const IgLogosDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const IgWrittenLogoImg = styled.img`
    margin-left: 2rem;
    width: 9rem;
    height: 3rem;   
`

const IgIconLogoImg = styled.img`
    margin-right: 2rem;
    width: 3rem;
    height: 3rem;
`

const SearchFieldDiv = styled.div`
    border: 1px solid grey;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start; 
`

const SearchFieldInput = styled.input`
    border: none;
    &:focus{
        border: none;
    }
`
const SearchFiledImg = styled.img`
    margin: 0.5rem;
`
const UserButtons = styled.div`
    width: 13vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between      
`
const UserButtonImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            changeHandeler: props.changeHandeler
        }
    }

    render(){
        return(
            <SearchBarDiv>
                <ContentContainerDiv>
                    <IgLogosDiv>
                        <IgIconLogoImg src={require('./assets/ig_icon.png')} alt=""/>
                        <hr/>
                        <IgWrittenLogoImg src={require('./assets/ig_written_logo.png')} alt=""/>
                    </IgLogosDiv>
                    
                    <SearchFieldDiv>
                        <SearchFiledImg src={require('./assets/spyglass_icon.png')} />
                        <SearchFieldInput  type='text' placeholder="Search"  onChange={this.props.changeHandeler} value={this.props.value}/>
                        
                    </SearchFieldDiv>

                    <UserButtons>
                        <UserButtonImg src={require('./assets/cumpas_icon.png')} alt=""/>
                        <UserButtonImg src={require('./assets/heart_icon.png')} alt=""/>
                        <UserButtonImg src={require('./assets/user_icon.png')} alt=""/>
                    </UserButtons>

                </ContentContainerDiv>
            </SearchBarDiv>
        );
    }
}

export default SearchBar;