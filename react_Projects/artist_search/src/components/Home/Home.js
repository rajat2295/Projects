import React, { Component } from 'react';
import Modal from '../Modal/Modal'
import Search from '../Search/Search'
import SearchResults from '../SearchResults/SearchResults';
import { Route } from 'react-router-dom'
import classes from './Home.css'
import Arrow from '../../assets/images/arrow.png'
class Home extends Component {
    state = {
        searching: false,
        searchable: false,
        show: false,
        list: [],
        search: {
            name: {
                value: '',
                validation: {
                    required: true,
                    name:'jack'
                },
                valid: false
            },
            number: {
                value: '',
                validation: {
                    required: true,
                    length:4
                },
                valid: false
            }

        }


    }

    chackValidity(value, rules){
        let isValid = true;

        if(rules.required){
            isValid=value.trim()!=='' && isValid;            
        }

        if(rules.name){
            isValid=(value.toLowerCase()==rules.name) && isValid;            
        }

        if(rules.length){
            isValid=(value==rules.length) && isValid;            
        }
        return isValid;
    }


    searchHandler = (event) => {
        event.preventDefault();
        this.setState({ searching: true });
    }
    searchRevokeHandler = () => {
        this.setState({ searching: false });
        
    }
    startSearchHandler = () => {
        this.setState({ show: true });
    }

    searchable=()=>{
        if(this.state.search.name.valid && this.state.search.number.valid){
            return true;
        }
        return false;
    }
    searchCancelHandler = () => {
        this.setState({ show: false, searchable: false, searching: false })
    }

    inputChangeHandlerName = (event) => {
        const updatedSearchData = {
            ...this.state.search
        }
        const updatedFormElement = {
            ...updatedSearchData["name"]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid= this.chackValidity(updatedFormElement.value,updatedFormElement.validation)
        
        updatedSearchData["name"] = updatedFormElement;
        this.setState({ search: updatedSearchData });

        
        this.searchable;
    }
    inputChangeHandlerNumber = (event) => {
        const updatedSearchData = {
            ...this.state.search
        }
        const updatedFormElement = {
            ...updatedSearchData["number"]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid= this.chackValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedSearchData["number"] = updatedFormElement
        this.setState({ search: updatedSearchData });
        
        this.searchable;

    }
    render() {


        let display = (
            <div className={classes.Home}>
            
                <div className={classes.Center}>
                <div className={classes.Image}><img src={Arrow} className={classes.ImageContent} alt="Arrow"/></div>
                    <div className={classes.Content}><h1 className={classes.Head}>Find your artist below</h1>
                    <button onClick={this.startSearchHandler}
                        className={classes.Button}>Search Artist</button>
                </div>
                </div>
                <Modal show={this.state.show} modalClosed={this.searchCancelHandler}>
                    <Search
                        searchable={this.searchable()}
                        searched={this.searchHandler}
                        close={this.searchCancelHandler}
                        changedName={this.inputChangeHandlerName}
                        changedNumber={this.inputChangeHandlerNumber}
                    />
                </Modal>
            </div>
        )
        if (this.state.searching) {
            display = (<SearchResults searchRevoke={this.searchCancelHandler} name={this.state.search.name.value} number={this.state.search.number.value} />);
        }

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Home;