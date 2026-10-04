import PropTypes from "prop-types";
import { motion } from "framer-motion";

function AnimatedBackground({ className = "" }) {
  return (
    <div className={`animated-background ${className}`.trim()} aria-hidden="true">
      <motion.div
        className="animated-background__orb animated-background__orb--one"
        animate={{ x: [0, 28, 0], y: [0, -22, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="animated-background__orb animated-background__orb--two"
        animate={{ x: [0, -34, 0], y: [0, 26, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="animated-background__grid" />
      <div className="animated-background__vignette" />
    </div>
  );
}

AnimatedBackground.propTypes = {
  className: PropTypes.string,
};

export default AnimatedBackground;
