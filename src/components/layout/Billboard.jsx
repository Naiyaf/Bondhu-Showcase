import HeroScene from "../../scenes/Hero/HeroScene";
import NeedScene from "../../scenes/Need/NeedScene";
import FollowingScene from "../../scenes/Following/FollowingScene";
import AwarenessScene from "../../scenes/Awareness/AwarenessScene";
import BengaliAIScene from "../../scenes/BengaliAI/BengaliAIScene";
import EmergencyScene from "../../scenes/Emergency/EmergencyScene";
import CareEcosystemScene from "../../scenes/CareEcosystem/CareEcosystemScene";
import ClosingScene from "../../scenes/Closing/ClosingScene";
import BillboardEngine from "./BillboardEngine";

const scenes = [
  { id: "hero", component: HeroScene, duration: 5000 },
  { id: "need", component: NeedScene, duration: 5000 },
  { id: "following", component: FollowingScene, duration: 20000 },
  { id: "awareness", component: AwarenessScene, duration: 6000 },
  { id: "bengali-ai", component: BengaliAIScene, duration: 6000 },
  { id: "emergency", component: EmergencyScene, duration: 5000 },
  { id: "care-ecosystem", component: CareEcosystemScene, duration: 5000 },
  { id: "closing", component: ClosingScene, duration: 8000 },
];

function Billboard() {
  return <BillboardEngine scenes={scenes} />;
}

export default Billboard;