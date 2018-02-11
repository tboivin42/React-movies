import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: "", 
      placeHolder:"Taper votre film..."
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({searchText: e.target.value});
  }

  handleOnClick = (e) => {
    this.props.callback(this.state.searchText);
  }

  render() {
    return(
      <div className="row">
        <div className="col-lg-8 input-group">
          <input onKeyUp={this.handleChange.bind(this)} type="text" className="form-control input-lg" placeholder={this.state.placeHolder} />
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
          </span>
        </div>
      </div>
    )
  }

}

export default SearchBar;