import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    }
    this.searchHandler = this.searchHandler.bind(this);

  }
searchHandler(e){
  console.log(e.target.value)
  this.setState({
    term:e.target.value
  })
}
  render(){
    return(
      <div>
        <input onChange={this.searchHandler} /><br />
        {this.state.term}
      </div>
    )
  }
}
export default SearchBar;
