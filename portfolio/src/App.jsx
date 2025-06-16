import { Route, Routes } from "react-router-dom"
import NavbarIcon from "./components/Navbar/NavbarIcon"
import About from "./components/About/About"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Project from "./components/project/Project"

const App = () => {
  return (
    <div>
      <NavbarIcon />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
