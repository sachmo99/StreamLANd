import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';
function VideoPage({videoIdFromProps }){ 
    const { videoId, segmentId } = useParams();
    const [videoUrl, setVideoUrl ] = useState("");
    const [serverUrl, setServerUrl ] = useState("");
    useEffect(() =>{
            var temp = window.location.href;
            var temparray = temp.split(":",3);
            console.log(temparray);
            var server = temparray[1];
            setServerUrl("http:"+ server + ":4000");
    },[]);
    useEffect(() => {
        const fetchData = async => {
            try{
                let url;
                if (!segmentId) {
                    url = serverUrl + `/videos/${videoIdFromProps || videoId }/master.m3u8`;
                }else{
                    url = serverUrl + `/videos/${videoIdFromProps || videoId}/${segmentId}`;
                }
                console.log(serverUrl);
                setVideoUrl(url);
            }
            catch (error) {
                console.error("Error in watching ")
            }
        }
        if (serverUrl) { // Only fetch if serverUrl is set
            fetchData();
        }
    },[videoId,segmentId,serverUrl]);
    return(
        <div>
            <h1>Video Page</h1>
            <p>Video ID: {videoId}</p>
            {segmentId && <p>Segment ID: {segmentId}</p>}
            {/* Use videoId and segmentId to fetch or display content */}
            <div name="react-player-hls">
            {videoUrl && (
                <ReactPlayer
                    url={videoUrl}
                    controls
                    playing
                    width="100%"
                    height="100%"
                    config={{
                        file: {
                            attributes: {
                                crossOrigin: 'anonymous',
                            },
                        },
                        debug: true,
                    }}
                      
                />
            )}

            </div>
        </div>
    )
}
export default VideoPage;