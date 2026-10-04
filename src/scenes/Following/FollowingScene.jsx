import SceneWrapper from "../../components/common/SceneWrapper";
import TrackingVideo from "../../components/common/TrackingVideo";
import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";
import StatusPill from "../../components/ui/StatusPill";

import { trackingVideo } from "../../data/assets";

function FollowingScene() {
  return (
    <SceneWrapper className="scene--following">
      <div className="following-layout">
        <div className="following-media">
          <SectionTitle
            eyebrow="Autonomous mobility"
            title="Always Nearby"
            subtitle="Human Following"
            align="left"
          />
          <TrackingVideo src={trackingVideo} />
        </div>
        <GlassCard className="tracking-panel">
          <StatusPill>Following active</StatusPill>
          <div className="tracking-panel__metric">
            <strong>01</strong>
            <span>Person detected</span>
          </div>
          <div className="tracking-panel__metric">
            <strong>∞</strong>
            <span>Path awareness</span>
          </div>
          <div className="tracking-panel__route" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </GlassCard>
      </div>
    </SceneWrapper>
  );
}

export default FollowingScene;