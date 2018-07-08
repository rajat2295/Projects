import React,{Component}from 'react';

class searchBar extends Component{

    constructor(props){
        super(props);
        this.state={term:''};
    }

    onInputChange(event){

        console.log(event.target.value);
    }

    onInputChange=(term)=>{
    this.setState({term});
    this.props.onSearchTermChange(term);
    }

    render(){
        return(<div className='search-bar'>
          <input 
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/> 
          
          </div>
        );
    }
}

export default searchBar;