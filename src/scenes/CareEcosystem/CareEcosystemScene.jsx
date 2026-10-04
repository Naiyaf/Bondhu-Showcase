import { motion } from "framer-motion";

import SceneWrapper from "../../components/common/SceneWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";

const nodes = [
  ["Home", "Everyday comfort", "⌂"],
  ["Care Facility", "Shared awareness", "＋"],
  ["Family", "Closer connection", "♡"],
];

function CareEcosystemScene() {
  return (
    <SceneWrapper className="scene--ecosystem">
      <SectionTitle
        eyebrow="One connected care network"
        title="Extending Care"
        subtitle="Wherever care happens, BONDHU helps it reach further."
      />
      <div className="ecosystem">
        <div className="ecosystem__node ecosystem__node--bondhu">
          <motion.div
            className="ecosystem__core"
            animate={{ boxShadow: ["0 0 20px #38bdf8", "0 0 60px #38bdf8", "0 0 20px #38bdf8"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            B
          </motion.div>
          <span>BONDHU</span>
        </div>
        <div className="ecosystem__connections" aria-hidden="true">
          {nodes.map(([name], index) => (
            <motion.i
              key={name}
              style={{ "--line-index": index }}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 2.4, delay: index * 0.4, repeat: Infinity }}
            />
          ))}
        </div>
        <div className="ecosystem__nodes">
          {nodes.map(([title, description, icon], index) => (
            <GlassCard className="ecosystem-card" key={title}>
              <motion.div
                className="ecosystem-card__icon"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.2, delay: index * 0.3, repeat: Infinity }}
              >
                {icon}
              </motion.div>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SceneWrapper>
  );
}

export default CareEcosystemScene;
