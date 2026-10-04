import Billboard from "./components/layout/Billboard";
import AnimatedBackground from "./components/common/AnimatedBackground";
import LandscapePrompt from "./components/common/LandscapePrompt";

function App() {
  return (
    <div className="app-container">
      <AnimatedBackground />
      <LandscapePrompt />

      <Billboard />
    </div>
  );
}

export default App;