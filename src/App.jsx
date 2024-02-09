import ParticlesBackground from "./components/ParticlesBackground";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <ParticlesBackground />
      <SocialLinks />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
