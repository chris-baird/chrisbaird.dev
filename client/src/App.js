import Navbar from "./componets/Navbar";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Work from "./sections/Work";
import Commitment from "./sections/Commitment";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Technologies />
      <Work />
      <Commitment />
    </div>
  );
}

export default App;
