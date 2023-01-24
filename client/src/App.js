import { useState } from "react"
import Navbar from "./componets/Navbar"
import Landing from "./sections/Landing"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Technologies from "./sections/Technologies"
import Work from "./sections/Work"
import Commitment from "./sections/Commitment"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import UserContext from "./contexts/UserContext"
import DeveloperInfo from "./sections/DeveloperInfo"

function wakeApps() {
  fetch("https://nano-url.onrender.com")
  fetch("https://squad-up.onrender.com")
}

function App() {
  const [user, setUser] = useState({ email: null, token: null })
  wakeApps()

  // const user = { email: null, token: null };
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar setUser={setUser} />
        <Landing />
        <About />
        <Projects />
        <Technologies />
        <Commitment />
        <Contact />
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default App
