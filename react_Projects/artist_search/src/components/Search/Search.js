import React, { Component } from 'react'
import { options } from 'sw-toolbox';
import { Route } from 'react-router-dom'
import SearchResults from '../SearchResults/SearchResults'
import Input from '../Inputs/Inputs';
import classes from './Search.css';
import axios from 'axios';
class Search extends Component {
    state = {
        loading: false,

    }

    dataInputHandler = (event, inputIdentifier) => {

        const updatedSearchData = {
            ...this.state.searchData
        }
        const updatedFormElement = {
            ...updatedSearchData[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedSearchData[inputIdentifier] = updatedFormElement
        this.setState({ searchData: updatedSearchData });


    }
    beginSearch = (event) => {
        const name = this.state.searchData.name.value;
        const number = this.state.searchData.number.value;

        event.preventDefault();
        this.setState({ loading: true });

        axios.get('http://itunes.apple.com/search?term=' + name + '&limit=' + number)
        
    }


    render() {


        return (
            <div className={classes.Container}>
                <div className={classes.Head}>
                    <h1 >Enter Search Criteria</h1>
                </div>
                <form onSubmit={this.props.searched} autoComplete="off">
                    <div className={classes.Row}>
                        <div className={classes.Col30}>
                            <p className={classes.Label}>Artist Name</p>
                        </div>
                        <div className={classes.Col60}>
                            <input type='text' name='Artist Name' className={classes.Entry} onChange={this.props.changedName} />
                        </div>
                    </div>
                    <div className={classes.Row}>
                        <div className={classes.Col30}>
                            <p className={classes.Label}>No. of tracks</p>
                        </div>
                        <div className={classes.Col60}>
                            <input type='number' name='Track Number' className={classes.Entry} onChange={this.props.changedNumber} />
                        </div>
                    </div>
                    <div className={classes.Row} >
                        <div className={classes.Col30}></div>
                        <div className={classes.Col60}>
                            <button
                                disabled={!this.props.searchable}
                                className={classes.Button}>
                                Search </button>
                        </div>
                    </div>
                </form>


            </div>
        )
    }
}

export default Search;