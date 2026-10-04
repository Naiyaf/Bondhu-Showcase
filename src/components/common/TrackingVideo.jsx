import PropTypes from "prop-types";

import VideoFrame from "./VideoFrame";

function TrackingVideo({ src, className }) {
  return <VideoFrame src={src} className={className} />;
}

TrackingVideo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TrackingVideo;
