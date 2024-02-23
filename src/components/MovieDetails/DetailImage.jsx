import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UndefinedImg } from "../Common/MovieImage";
import { faArrowUpRightFromSquare, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getVideos } from "../../api/movieAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoOverlay from "../VideoOverlay/VideoOverlay";

const DetailImage = ({ movieDetail }) => {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const videos = await getVideos(id);
        const trailerVideo = videos.find((video) => video.type === "Trailer");
        if (trailerVideo) {
          setTrailerKey(trailerVideo.key);
        } else {
          console.log("No trailer found");
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [id]);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    setContainerHeight((prevHeight) => (prevHeight === 0 ? "100vh" : 0));
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setContainerHeight(0);
  };

  return (
    <div className="Detailpg-img">
      <div className="Img-wrapper">
        <UndefinedImg imageUrl={`${import.meta.env.VITE_ORIIMGURL}/${movieDetail.poster_path}`} altText={`Poster ${movieDetail.title}`} />
      </div>
      <div className="Watch-movie">
        <a href={`${movieDetail.homepage}`} target="_blank" rel="noreferrer">
          Homepage <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>

      {trailerKey && (
        <button className="Watch-trailer" onClick={toggleOverlay}>
          Watch Trailer <FontAwesomeIcon icon={faPlay} />
        </button>
      )}

      <VideoOverlay showOverlay={showOverlay} trailerKey={trailerKey} closeOverlay={closeOverlay} movieTitle={movieDetail.title} containerHeight={containerHeight} />
    </div>
  );
};

export default DetailImage;
