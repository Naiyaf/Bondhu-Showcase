import PropTypes from "prop-types";
import { motion } from "framer-motion";

function GlassCard({
  children,
  className = "",
  interactive = false,
  ...props
}) {
  return (
    <motion.div
      className={`glass-card ${className}`.trim()}
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ duration: 0.25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  interactive: PropTypes.bool,
};

export default GlassCard;
