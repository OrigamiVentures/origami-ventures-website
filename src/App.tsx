import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Team from "./components/Team";
import "./styles/Landing.css";

/**
 * Home
 * About Us
 * Services
 * Work
 * Team
 * @returns
 */
function App() {
  return (
    <div className="main">
      <div className="gradient-background"></div>
      <Header />
      <Home />
      <Services />
      <Team />
    </div>
  );
}

export default App;
