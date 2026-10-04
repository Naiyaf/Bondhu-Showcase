import PropTypes from "prop-types";
import { motion } from "framer-motion";

function FeatureCard({
  title,
  description,
  icon,
  status,
  className = "",
}) {
  return (
    <motion.article
      className={`feature-card ${className}`.trim()}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      {icon && <div className="feature-card__icon" aria-hidden="true">{icon}</div>}
      <div className="feature-card__body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      {status && <span className="feature-card__status">{status}</span>}
    </motion.article>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  icon: PropTypes.node,
  status: PropTypes.node,
  className: PropTypes.string,
};

export default FeatureCard;
