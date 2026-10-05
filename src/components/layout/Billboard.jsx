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
  { id: "hero", component: HeroScene, duration: 3500 },
  { id: "need", component: NeedScene, duration: 3500 },
  { id: "following", component: FollowingScene, duration: 15000 },
  { id: "awareness", component: AwarenessScene, duration: 4500 },
  { id: "bengali-ai", component: BengaliAIScene, duration: 3500 },
  { id: "emergency", component: EmergencyScene, duration: 3500 },
  { id: "care-ecosystem", component: CareEcosystemScene, duration: 3500 },
  { id: "closing", component: ClosingScene, duration: 3500 },
];

function Billboard() {
  return <BillboardEngine scenes={scenes} />;
}

export default Billboard;