import React from 'react';
import SingleImage from './SingleImage';

class ShowImages extends React.Component {
    state = {  }
    render() {
        let imagesElements = []
        this.props.images.forEach((image, idx) => {
            imagesElements.push(<SingleImage key={idx} imageData={image} />)
        });
        return (
            <div className="container">
                {imagesElements}
            </div>
        );
    }
}

export default ShowImages