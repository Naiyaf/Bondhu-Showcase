import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";

import AnimatedTransition from "../common/AnimatedTransition";

function BillboardEngine({
  scenes,
  defaultDuration = 5000,
  className = "",
  onSceneChange,
}) {
  const normalizedScenes = useMemo(
    () => scenes.map((scene, index) => ({
      id: scene.id ?? index,
      component: scene.component,
      duration: scene.duration ?? defaultDuration,
    })),
    [defaultDuration, scenes],
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (normalizedScenes.length < 2 || currentIndex >= normalizedScenes.length) {
      return undefined;
    }

    const duration = normalizedScenes[currentIndex].duration;
    const timer = window.setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % normalizedScenes.length);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [currentIndex, normalizedScenes]);

  useEffect(() => {
    if (normalizedScenes.length === 0) return;
    onSceneChange?.(normalizedScenes[currentIndex].id, currentIndex);
  }, [currentIndex, normalizedScenes, onSceneChange]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) return;
      setCurrentIndex((index) => index % normalizedScenes.length);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [normalizedScenes.length]);

  if (normalizedScenes.length === 0) return null;

  const scene = normalizedScenes[currentIndex];
  const CurrentScene = scene.component;

  return (
    <div className={`billboard-engine ${className}`.trim()}>
      <AnimatePresence mode="wait" initial>
        <AnimatedTransition transitionKey={scene.id}>
          <CurrentScene />
        </AnimatedTransition>
      </AnimatePresence>
    </div>
  );
}

BillboardEngine.propTypes = {
  scenes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      component: PropTypes.elementType.isRequired,
      duration: PropTypes.number,
    }),
  ).isRequired,
  defaultDuration: PropTypes.number,
  className: PropTypes.string,
  onSceneChange: PropTypes.func,
};

export default BillboardEngine;
