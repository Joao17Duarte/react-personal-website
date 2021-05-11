import Contacts from "./components/Contacts/Contacts";
import CodeLanguage from "./components/CodeLanguage/CodeLanguage";
import HeroSection from "./components/HeroSection/HeroSection";
import WorkExp from "./components/WorkExp/WorkExp";
import Project from "./components/Project/Project";
import { ProjectData } from "./components/Project/ProjectData";


export default function App() {
  return (
    <>
      <div>

        <HeroSection />
        
        <CodeLanguage />

        {/* <Projects slides={ProjectData} /> */}
        <Project slides={ProjectData} />
        
        <WorkExp />

        <Contacts />

      </div>
    </>
  )
}


