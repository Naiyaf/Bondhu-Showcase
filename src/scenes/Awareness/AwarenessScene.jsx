import { motion } from "framer-motion";

import SceneWrapper from "../../components/common/SceneWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import DataRing from "../../components/ui/DataRing";

const features = [
  ["Vital Monitoring", "Quietly watching the signals that matter.", "●"],
  ["Fall Detection", "Recognising a sudden change in movement.", "⌁"],
  ["Medication Support", "Keeping routines visible and on time.", "＋"],
  ["Hazard Detection", "Finding risks before they become emergencies.", "△"],
  ["Night Monitoring", "Awareness that stays with you after dark.", "◐"],
];

function AwarenessScene() {
  return (
    <SceneWrapper className="scene--awareness">
      <div className="scene-heading-row">
        <SectionTitle
          eyebrow="Continuous awareness"
          title="Continuously Aware"
          subtitle="A calm layer of intelligence around everyday life."
          align="left"
        />
        <DataRing value={98} label="awareness" />
      </div>
      <div className="awareness-layout">
        <div className="awareness-radar" aria-hidden="true">
          <motion.div
            className="awareness-radar__sweep"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          {[0, 1, 2].map((ring) => (
            <motion.div
              className="awareness-radar__ring"
              key={ring}
              animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.15, 0.45] }}
              transition={{ duration: 3 + ring, repeat: Infinity, delay: ring * 0.4 }}
            />
          ))}
          <span className="awareness-radar__core">B</span>
        </div>
        <div className="awareness-panel">
          <h2>Always aware. Quietly present.</h2>
          <ul>
            {features.map(([title, description]) => (
              <li key={title}>
                <span className="awareness-panel__bullet" aria-hidden="true" />
                <span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SceneWrapper>
  );
}

export default AwarenessScene;
