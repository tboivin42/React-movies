import React from 'react';
import { connect } from 'react-redux';
import { loadSearch, updateRecommendations } from '../actions';

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: "", 
      placeHolder:"Tapez votre film..."
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({searchText: e.target.value});
  }

  handleOnClick = (e) => {
    const { loadSearch } = this.props;
    loadSearch(this.state.searchText);
    // this.props.callback(this.state.searchText);
  }

  render() {
    return(
      <div className="row">
        <div className="col-lg-8 input-group">
          <input onKeyUp={this.handleChange.bind(this)} type="text" className="form-control input-lg" placeholder={this.state.placeHolder} />
          <span className="input-group-btn">
            <button className="btn btn-primary btn-lg active" onClick={this.handleOnClick.bind(this)}>Go</button>
          </span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  loadSearch,
}

export default connect(null, mapDispatchToProps)(SearchBar);