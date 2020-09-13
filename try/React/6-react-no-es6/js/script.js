class MyDiv extends React.Component {
    render() {
        return (
            <div>
                <span>Hello</span>
                <MySpan />
            </div>
        )
    }
}
class MySpan extends React.Component {
    render() {
        return <div><span>I am new line</span><span>I am new line1</span></div>

   } 
}
ReactDom.render(<MyDiv />,document.querySelector('#container'))