import Chatbot from "./components/Chatbot"
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import ResumeDownload from "./components/ResumeDownload"
import SkillsSection from "./components/SkillsSection"


function App() {
  
  return (
    <div className="App">
      <HeroSection/>
      <SkillsSection/>
      <ResumeDownload/>
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App
