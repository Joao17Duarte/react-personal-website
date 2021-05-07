import styled from "styled-components/macro";
import Contacts from "./components/Contacts/Contacts";
import CodeLanguage from "./components/CodeLanguage/CodeLanguage";
import HeroSection from "./components/HeroSection/HeroSection";
import WorkExp from "./components/WorkExp/WorkExp";


export default function App() {
  return (
    <>
      <AppWrapper>

        <HeroSection />
        

        <CodeLanguage />

        <div>
          
          Projects:
          <ul>
            <li>Capstone Project</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>

        </div>
        <WorkExp />
        <Contacts />
      </AppWrapper>
    </>
  )
}


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`