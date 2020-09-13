import React from 'react'

class Time extends React.Component{
    state = {time:null}
    componentDidMount(){
         setInterval(() => {
            this.setState({time: new Date().toLocaleString()})
        }, 1000);
    }
    render(){
        return <div>The Exact Time is : {this.state.time}</div>
     }
}

export default Time