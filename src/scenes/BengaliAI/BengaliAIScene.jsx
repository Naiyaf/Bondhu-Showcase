import { motion } from "framer-motion";

import SceneWrapper from "../../components/common/SceneWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";
import StatusPill from "../../components/ui/StatusPill";

function BengaliAIScene() {
  return (
    <SceneWrapper className="scene--assistant">
      <div className="assistant-layout">
        <div className="assistant-orb" aria-hidden="true">
          <motion.div
            className="assistant-orb__halo"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />
          <motion.div
            className="assistant-orb__wave"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <span>B</span>
        </div>
        <div className="assistant-copy">
          <SectionTitle
            eyebrow="Natural conversation"
            title="Speaks Human"
            subtitle="Bengali AI Assistant"
            align="left"
          />
          <GlassCard className="assistant-card">
            <StatusPill>Listening and ready</StatusPill>
            <p className="assistant-card__quote">“আমি আপনার সাথে আছি।”</p>
            <p className="assistant-card__translation">I am here with you.</p>
            <div className="voice-wave" aria-hidden="true">
              {Array.from({ length: 18 }, (_, index) => (
                <motion.i
                  key={index}
                  animate={{ scaleY: [0.35, 1, 0.45] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: index * 0.05 }}
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </SceneWrapper>
  );
}

export default BengaliAIScene;
