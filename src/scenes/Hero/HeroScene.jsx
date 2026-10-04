import SceneWrapper from "../../components/common/SceneWrapper";
import ImageFrame from "../../components/common/ImageFrame";
import SectionTitle from "../../components/ui/SectionTitle";

import { bondhuRoom } from "../../data/assets";

function HeroScene() {
  return (
    <SceneWrapper className="scene--hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <SectionTitle
            eyebrow="Autonomous elderly care companion"
            title="BONDHU"
            subtitle="A Friend That Never Sleeps"
            align="left"
          />
          <p className="hero-tagline">
            Quietly present. Always aware.
          </p>
        </div>
        <div
          className="hero-visual"
          style={{ backgroundImage: `url(${bondhuRoom})` }}
        >
          <ImageFrame
            src={bondhuRoom}
            alt="Bondhu robot in a calm room"
            className="hero-robot hero-robot--portrait"
            priority
            animateOnMount={false}
          />
        </div>
      </div>
    </SceneWrapper>
  );
}

export default HeroScene;