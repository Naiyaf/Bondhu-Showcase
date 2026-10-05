import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
  animateOnMount = true,
  ...props
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`image-frame ${className}`.trim()}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      initial={animateOnMount ? { opacity: 0, scale: 0.97 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      {...props}
    />
  );
}

ImageFrame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  priority: PropTypes.bool,
  animateOnMount: PropTypes.bool,
};

export default ImageFrame;