import { useState } from "react";
import Navbar from "./componets/Navbar";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Work from "./sections/Work";
import Commitment from "./sections/Commitment";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import UserContext from "./contexts/UserContext";
function App() {
  const [user, setUser] = useState({ email: null, token: null });

  // const user = { email: null, token: null };
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar setUser={setUser} />
        <Landing />
        <About />
        <Projects />
        <Technologies />
        <Work />
        <Commitment />
        <Contact />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
