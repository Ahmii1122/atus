import "./App.css";
import Atusmix from "./components/atusmixsec/Atusmix";
import HeroSection from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import StatsSection from "./components/statssec/statssec";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Atusmix />
      <StatsSection />
    </div>
  );
}

export default App;
