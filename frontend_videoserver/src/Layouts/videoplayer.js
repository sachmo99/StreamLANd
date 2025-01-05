import React from "react";
import { ReactVideo } from "reactjs-media";

class Videoplayer extends React.Component  {
    state = {
        videoUrl: this.props.videourl,
    }

    constructor(props) {
        super(props);


    }
    // componentDidMount() {
    //     this.setState({videoUrl : this.props.videourl});
    // }

    render() {
    return (
        <div>
            
            <ReactVideo
                src={this.state.videoUrl}
                poster={process.env.PUBLIC_URL + "/pictures/streamland.png"}
                primaryColor="red"
                // other props
            />
        </div>
    );
    }
};

export default Videoplayer;