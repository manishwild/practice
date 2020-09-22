import React from 'react'

class Time extends React.Component{
    state = {time: null}
    componentDidMount(){
        setInterval(() => {
            //console.log(new Date().toLocaleTimeString());
            this.setState({time: new Date().toLocaleTimeString() })
        }, 1000)
    }
    render(){
        return <div>Exact Time  : {this.state.time}</div>
    }
}

export default Time