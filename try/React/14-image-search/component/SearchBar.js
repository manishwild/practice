import React from 'react'

class SearchBar extends React.Component {
  state ={searchWord:'',color:null}

  onSearchInpChange = (e) =>{
    this.state({searchWord:e.target.value})
  }


  onSearchBtnClick = () => {
    this.props.runSearch(this.state.searchWord,this.state.color)
  }

  render() {
    return (
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.onSearchBtnClick}>
              Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type something to search"
            value={this.state.searchWord}
            onChange={this.onSearchInpChange}/>
        </div>
      </div>
    )
  }
}

export default SearchBar