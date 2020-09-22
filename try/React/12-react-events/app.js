import React from 'react';
import ReactDOM from 'react-dom';
import Pagging from './components/Pagging';
import SearchBar from './components/SearchBar';
import ShowImages from './components/ShowImages';
import Time from './components/Time';
import getImages from './services/pixabay';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.spinnerRef = React.createRef()
    }
    state = {totalImages:null,imagesList:[],searchWord:null,color:null}
    search = (searchWord, color,pageNumber) => {
        //console.log(searchWord); search proccess
    
        this.spinnerRef.current.classList.add('active')
        getImages(searchWord, color, pageNumber).then(data => {
            this.spinnerRef.current.classList.remove('active')
          console.log(data);
          this.setState({
            totalImages: data.total,
            imagesList: [...data.hits],
            searchWord: searchWord,
            color: color
          })
        }).catch(error => {
            this.spinnerRef.current.classList.remove('active')
          console.log(error);
        })
      }
      goToPage = (num) => {
        this.search(this.state.searchWord, this.state.color, num)
    }
    render() {
        return (
            <div className = 'ui segment'>
            <Time/>
            <SearchBar text=' enter search word' runSearch={this.search} />
            {this.state.totalImages != null? 'Found: ' + this.state.totalImages + 'Images' : '' }
            <ShowImages images ={this.state.imagesList} />
            <Pagging totalImages={this.state.totalImages} runPage={this.goToPage} />
            <div ref={this.spinnerRef} className="ui dimmer">
                 <div className="ui text loader">Loading</div>
            </div>
            <p></p>
            </div>
            
            
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))