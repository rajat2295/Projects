import React,{Component} from 'react'
import { options } from 'sw-toolbox';
import {Route} from 'react-router-dom'
import SearchResults from '../SearchResults/SearchResults'
import Input from '../Inputs/Inputs';
import classes from './Search.css';
import axios from 'axios';
class Search extends Component
{
    state={
        loading:false,
        
    }

    dataInputHandler=(event,inputIdentifier)=>{
        
        const updatedSearchData = {
            ...this.state.searchData
        }
        const updatedFormElement ={
            ...updatedSearchData[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedSearchData[inputIdentifier] = updatedFormElement
        this.setState({searchData: updatedSearchData});
       

    }
    beginSearch=(event)=>{
        const name= this.state.searchData.name.value;
        const number= this.state.searchData.number.value;

        event.preventDefault();
        this.setState({loading:true});
        
        axios.get('http://itunes.apple.com/search?term='+name+'&limit='+number)
        // console.log(this.state)
    }

    
    render()
    {
        
       
        return(
        <div className={classes.Container}>
            <h1>Enter Search Criteria</h1>
            <form onSubmit={this.props.searched}>
              <div>
              <p className={classes.Entry}>Artist Name: </p><input  type='text' name='Artist Name' onChange={this.props.changedName}/>
               </div>
               <div>
               <p className={classes.Entry}>Track Number: </p><input  type='number' name='Track Number' onChange={this.props.changedNumber}/>
                </div><button
                disabled ={!this.props.searchable}
                className={classes.Button}
                >
                Search </button>
                </form>
           

        </div>
    )}
}

export default Search;