import PropTypes from "prop-types";
import { motion } from "framer-motion";

function SceneWrapper({ children, className = "", ...props }) {
  return (
    <motion.section
      className={`scene ${className}`.trim()}
      {...props}
    >
      {children}
    </motion.section>
  );
}

SceneWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SceneWrapper;