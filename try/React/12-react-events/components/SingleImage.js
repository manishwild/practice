import React from 'react';

class SingleImage extends React.Component {
    constructor(props) {
        super(props);
        this.overallDivRef = React.createRef()
    }
    onOverallClick = () => {
        this.onOverallClick.current.classList.remove('active')
    }
    onthumbImageClick =() => {
        this.onOverallClick.current.classList.add('active')
    }
    render() {
        return (
            <div >
                <img onClick={this.onthumbImageClick} src={this.props.imageData.previewURL} />
                <div onClick={this.onOverallClick} ref={this.overallDivRef} className="ui  dimmer">
                    <img onClick={(e) => {e.stopPropagation()}}  src={this.props.imageData.largeImageURL} />
                </div>
            </div>
        );
    }
}

export default SingleImage;