import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {searchText: "", placeHolder:"Taper votre film..."}
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({searcheText: e.target.value});
  }

  render() {
    return(
      <div>
        <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
      </div>      
    )  
  }

}

export default SearchBar;