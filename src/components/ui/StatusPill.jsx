import PropTypes from "prop-types";
import { motion } from "framer-motion";

function StatusPill({ children, tone = "cyan" }) {
  return (
    <motion.span
      className={`status-pill status-pill--${tone}`}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
    >
      <span className="status-pill__dot" />
      {children}
    </motion.span>
  );
}

StatusPill.propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(["cyan", "amber", "muted"]),
};

export default StatusPill;
