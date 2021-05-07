import styled from "styled-components/macro";

import { FaGraduationCap } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import timelineElements from "./TimelineElements"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


export default function WorkExp() {
  let workIconStyles = { background: "#C1292E" }
  let schoolIconStyles = { background: "darkorange" }

  return (
    <div>
          
      <H3>Work Experience</H3>
      <HR/>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <FaLaptop /> : <FaGraduationCap />}
              
            >
              <Title>
                {element.title}
              </Title>

              <Location>
                {element.location}
              </Location>

              <JobDescription>{element.description}</JobDescription>

              {showButton && (
                <Button target='_blank' href={element.url}>
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



const Title = styled.h4`
  padding-top: 5px;
  margin-top: 0;
  font-weight: normal;
`

const Location = styled.h5`
  color:#888;
  margin: 0;
`

const JobDescription = styled.p`
  margin: 1.5em 0 !important;
  font-size:2em;
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
const H3 = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
`

const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(155, 0, 0, 1), rgba(0, 0, 0, 0)); 
  margin-bottom: 2em;
`