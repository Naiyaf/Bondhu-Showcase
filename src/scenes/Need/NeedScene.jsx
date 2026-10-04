import SceneWrapper from "../../components/common/SceneWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import { motion } from "framer-motion";

function NeedScene() {
  return (
    <SceneWrapper className="scene--need">
      <motion.div
        className="need-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
      />
      <SectionTitle
        eyebrow="The care gap"
        title={<>Care Cannot<br />Be Everywhere</>}
        subtitle="But technology can help care reach further."
      />
      <div className="need-points" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </SceneWrapper>
  );
}

export default NeedScene;