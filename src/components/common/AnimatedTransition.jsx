import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, scale: 0.985, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.01, y: -12 },
};

function AnimatedTransition({
  children,
  className = "",
  transitionKey,
  duration = 0.8,
}) {
  return (
    <motion.div
      key={transitionKey}
      className={`animated-transition ${className}`.trim()}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

AnimatedTransition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  transitionKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  duration: PropTypes.number,
};

export default AnimatedTransition;
