import { motion } from "framer-motion";

import SceneWrapper from "../../components/common/SceneWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import StatusPill from "../../components/ui/StatusPill";

const stages = [
  ["01", "Detect", "Signal identified"],
  ["02", "Assess", "Context understood"],
  ["03", "Respond", "Support initiated"],
  ["04", "Alert", "Care network notified"],
];

function EmergencyScene() {
  return (
    <SceneWrapper className="scene--emergency">
      <SectionTitle
        eyebrow="Emergency response"
        title="When Seconds Matter"
        subtitle="A clear path from awareness to action."
      />
      <div className="emergency-status">
        <StatusPill tone="amber">Response pipeline ready</StatusPill>
      </div>
      <div className="emergency-pipeline">
        {stages.map(([number, title, detail], index) => (
          <motion.div className="pipeline-stage" key={title}>
            <motion.div
              className="pipeline-stage__node"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.35, duration: 0.5 }}
            >
              {number}
            </motion.div>
            <h2>{title}</h2>
            <p>{detail}</p>
            {index < stages.length - 1 && (
              <motion.span
                className="pipeline-stage__connector"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.35 + 0.4, duration: 0.7 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </SceneWrapper>
  );
}

export default EmergencyScene;
