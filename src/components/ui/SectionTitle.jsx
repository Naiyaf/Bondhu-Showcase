import PropTypes from "prop-types";
import { motion } from "framer-motion";

function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "center",
}) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && (
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h1
        className="scene-title"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          className="scene-subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  eyebrow: PropTypes.node,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default SectionTitle;