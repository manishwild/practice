import React from 'react'
import ReactDom from 'react-dom'
import ApprovalCard from './components/approvialCard'
import Comment from './components/comment'


const App = () => {
    return (
<div>
<ApprovalCard>
  hey i am Beutiful Card  
</ApprovalCard>
<ApprovalCard>
    <Comment starColor="red" rate="2 star" text = "Nice comment" />
</ApprovalCard>  

<Comment starColor="yellow" rate="4 star" text = "good comment" />
     <Comment starColor="blue" rate="5 star" text = "Nice meaning " />
</div>
    )
}

ReactDom.render(<App />, document.querySelector('#container'))