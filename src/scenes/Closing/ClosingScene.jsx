import { motion } from "framer-motion";

import SceneWrapper from "../../components/common/SceneWrapper";
import ImageFrame from "../../components/common/ImageFrame";
import { heroRobot } from "../../data/assets";

function ClosingScene() {
  return (
    <SceneWrapper className="scene--closing">
      <div className="closing-robot-frame">
        <ImageFrame
          src={heroRobot}
          alt="Bondhu robot silhouette"
          className="closing-robot"
        />
      </div>
      <div className="closing-copy">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technology should not replace care.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          It should extend it.
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          BONDHU
        </motion.span>
      </div>
    </SceneWrapper>
  );
}

export default ClosingScene;
