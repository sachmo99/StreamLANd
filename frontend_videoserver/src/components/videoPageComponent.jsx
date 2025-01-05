import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';
import Footer from './footer';

function VideoPage({ videoIdFromProps }) {
  const { videoId, segmentId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [hovered, setHovered] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    setServerUrl(`http://${hostname}:4000`);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (!segmentId) {
          url = `${serverUrl}/videos/${videoIdFromProps || videoId}`;
        } else {
          url = `${serverUrl}/videos/${videoIdFromProps || videoId}/${segmentId}`;
        }
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video URL", error);
      }
    };

    if (serverUrl) {
      fetchData();
    }
  }, [videoId, segmentId, serverUrl, videoIdFromProps]);

  useEffect(() => {
    let idleTimeout;

    if (hovered) {
      setIsIdle(false);
      idleTimeout = setTimeout(() => {
        setIsIdle(true);
        setHovered(false);
      }, 5000);
    }

    return () => clearTimeout(idleTimeout);
  }, [hovered]);

  return (
    <div
      className="relative w-full mx-auto group"
      onMouseMove={() => {setHovered(true)}}
      
    >
      { videoUrl && (
        <ReactPlayer
          url={videoUrl}
          controls
          playing={false}
          height="100vh"
          width="100vw"
          config={{
            file: {
                forceHLS: true,
                hlsOptions: {
                    debug: true, // Enable debug logging for more details
                  },
              attributes: {
                crossOrigin: 'anonymous',
                playsInline: true,
              },
            },
            
            //debug: true,
          }}
          onError={(e) =>  {console.error('Video load error:', e)
            if (e && typeof e === 'object') {
                for (const key in e) {
                  console.log(`${key}:`, e[key]);
                }
              }
          }}
        />
      ) }
      {hovered && !isIdle && (
        <div
          className={`absolute top-0 left-0 right-0 h-[5vh] w-screen flex items-center justify-center bg-black bg-opacity-50 text-white text-lg md:text-2xl transition-transform duration-500 transform ${
            hovered ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <h3>{videoId}</h3>
        </div>
      )}
      <Footer className="w-screen" />
    </div>
  );
}

export default VideoPage;
