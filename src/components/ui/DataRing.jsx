import PropTypes from "prop-types";
import { motion } from "framer-motion";

function DataRing({ value = 72, label }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="data-ring">
      <svg viewBox="0 0 112 112" role="img" aria-label={`${label}: ${value}%`}>
        <circle className="data-ring__track" cx="56" cy="56" r={radius} />
        <motion.circle
          className="data-ring__value"
          cx="56"
          cy="56"
          r={radius}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <strong>{value}%</strong>
      <span>{label}</span>
    </div>
  );
}

DataRing.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string.isRequired,
};

export default DataRing;
