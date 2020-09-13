import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './component/SearchBar'
import getData from './services/pixabay'
import ShowImages from './components/ShowImages'


class App extends React.Component{
    render(){
       return (
        <div className="container">
            <SearchBar />
        </div>
    ) 
    }
    
}
ReactDOM.render(<App />, document.querySelector('#container'))