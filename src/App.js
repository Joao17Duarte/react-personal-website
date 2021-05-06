import styled from "styled-components/macro";
import HeroSection from "./components/HeroSection/HeroSection";
import WorkExp from "./components/WorkExp/WorkExp";


export default function App() {
  return (
    <>
      <AppWrapper>

        <HeroSection />
        

        <div>
        
          Stacks of Choice

          <ul>
            <li>React</li>
            <li>Js</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

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
        <div>Contacts
          <ul>
            <li>Contact 123</li>
            <li>Contact 123</li>
            <li>Contact 123</li> 
          </ul>
        </div>
      </AppWrapper>
    </>
  )
}


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`