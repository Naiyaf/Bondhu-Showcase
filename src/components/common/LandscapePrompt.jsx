import PropTypes from "prop-types";

function LandscapePrompt({ children = "This exhibition experience is designed for landscape." }) {
  return (
    <div className="landscape-prompt" role="status">
      <div className="landscape-prompt__icon">↔</div>
      <h1>Please rotate device</h1>
      <p>{children}</p>
    </div>
  );
}

LandscapePrompt.propTypes = {
  children: PropTypes.node,
};

export default LandscapePrompt;
