import React from 'react'
import ReactDOM from 'react-dom'
//**Functin component */
const App = ()=>{
   //return <div>Hi there</div>
   const text = 'Enter your Name'
   return (
       <div>
           <label className='label' htmlFor='name'>{text}</label>
           <input type="text" id="name" style={{backgroundColor:'yellow',color:'blue'}} />
       </div>
   )
}

//*********Class component */
// class App extends React.Component{
//     render(){
//        return <div>Hi There!</div>
//     }
// }
ReactDOM.render(<App />,document.querySelector('#container'))