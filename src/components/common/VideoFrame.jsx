import PropTypes from "prop-types";
import { motion } from "framer-motion";

function VideoFrame({
  src,
  poster,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  ...props
}) {
  return (
    <motion.video
      className={`video-frame ${className}`.trim()}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      preload="metadata"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      {...props}
    >
      Your browser does not support video playback.
    </motion.video>
  );
}

VideoFrame.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  className: PropTypes.string,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
};

export default VideoFrame;