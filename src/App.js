import styled from "styled-components/macro";
import HeroSection from "./components/HeroSection/HeroSection";



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
        <div>
          
          Work Experience 

          <ul>
            <li>2021</li>
            <p>neuefische bootcamp</p>
            <li>2020</li>
            <p>Spa-Therapist</p>
            <li>2019</li>
            <p>Spa-Therapist</p>
            <li>2018</li>
            <p>Spa-Therapist</p>
            <li>2017</li>
            <p>Student</p>
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