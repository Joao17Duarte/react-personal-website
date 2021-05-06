import styled from "styled-components/macro";

import { ReactComponent as SchoolIcon } from "./school.svg"
import { ReactComponent as WorkIcon } from "./work.svg"
// import './WorkExp.css'
import timelineElements from "./TimelineElements"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


export default function WorkExp() {
  let workIconStyles = { background: "#C1292E" }
  let schoolIconStyles = { background: "darkorange" }

  return (
    <div>
          
      <h4>Work Experience</h4>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              
            >
              <Title>
                {element.title}
              </Title>

              <Location>
                {element.location}
              </Location>

              <JobDescription>{element.description}</JobDescription>

              {showButton && (
                <Button href="/">
                  {element.buttonText}
                </Button>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  )
}



const Title = styled.h3`
  padding-top: 5px;
  margin-top: 0;
`

const Location = styled.h5`
  color:#888;
  margin: 0;
`

const JobDescription = styled.p`
  
  margin: 1.5em 0 !important;
`

const Button = styled.a`
text-decoration: none;
padding: 0.5em 1em;
border-radius: 5px;
color: #C1292E;
background-color: #333;
box-shadow: 0 0 5px #888;
&:hover{
  box-shadow: 0 0 15px #C1292E;
  color: white;
  background-color: #555;
}
`

// const WorkBtn = styled.a`
// background-color: #06d6a0;
// `

// const SchoolBtn = styled.a`
// background-color: #f9c74f;
// `
