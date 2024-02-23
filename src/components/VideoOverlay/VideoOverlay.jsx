import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./VideoOverlay.css";

const VideoOverlay = ({ showOverlay, trailerKey, closeOverlay, movieTitle, containerHeight }) => {
  return (
    <div className="Video-container" style={{ height: containerHeight }}>
      {showOverlay && (
        <div className="Overlay">
          <div className="Overlay-info">
            <h2>{movieTitle} Trailer</h2>
            <FontAwesomeIcon icon={faTimes} onClick={closeOverlay} />
          </div>

          <div className="Overlay-content">
            <iframe src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`} title={`${movieTitle} Trailer`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoOverlay;
