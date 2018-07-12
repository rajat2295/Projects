import React, { Component } from 'react';
import Modal from '../Modal/Modal'
import Search from '../Search/Search'
import SearchResults from '../SearchResults/SearchResults';
import {Route} from 'react-router-dom'
import classes from './Home.css'
class Home extends Component {
    state ={
        searching:false,
        searchable:false,
        show:false,
        list:[],
        search:{
            name:{
                value:''
            },
            number:{
                value:''
            }
        }
       
     
    }


    searchHandler=(event)=>{
        event.preventDefault();
        this.setState({searching:true});
    }
    searchRevokeHandler=()=>{
        this.setState({searching:false});
        // console.log('hello')
    }
    startSearchHandler=()=>{
        this.setState({show:true}); 
    }
    searchCancelHandler=()=>{
        this.setState({show:false,searchable:false,searching:false})
    }

    inputChangeHandlerName=(event)=>{
        const updatedSearchData = {
            ...this.state.search
        }
        const updatedFormElement ={
            ...updatedSearchData["name"]
        }
        updatedFormElement.value = event.target.value;
        updatedSearchData["name"] = updatedFormElement
        this.setState({search: updatedSearchData});
       
        console.log(this.state.search);
    }
    inputChangeHandlerNumber=(event)=>{
        const updatedSearchData = {
            ...this.state.search
        }
        const updatedFormElement ={
            ...updatedSearchData["number"]
        }
        updatedFormElement.value = event.target.value;
        updatedSearchData["number"] = updatedFormElement
        this.setState({search: updatedSearchData});
       console.log(this.state.search);

    }
    render() {
        

        let display =  ( 
            <div className={classes.Home}>
            <div className={classes.Center}>
            <h1 className={classes.Head}>Find your artist below</h1>
            <button onClick={this.startSearchHandler} 
            className={classes.Button}>Search Artist</button>
                </div>
                <Modal show={this.state.show} modalClosed={this.searchCancelHandler}>
                    <Search 
                    searchable={this.state.searchable}
                    searched={this.searchHandler}
                    close ={this.searchCancelHandler}
                    changedName = {this.inputChangeHandlerName}
                    changedNumber = {this.inputChangeHandlerNumber}
                    />
                </Modal>
            </div>
            )
            if(this.state.searching ){
                display = (<SearchResults searchRevoke={this.searchCancelHandler} name={this.state.search.name.value} number={this.state.search.number.value}/>);
            }
            
        return (
            <div>
            {display}
            </div>
        )
    }
}

export default Home;