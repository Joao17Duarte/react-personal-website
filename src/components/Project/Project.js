import { useState } from 'react'
import styled from 'styled-components/macro'
import { ProjectData } from './ProjectData'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'


export default function Projects({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
    <Text>Projects</Text>
      <HR />
      <Slider>
        <LeftArrow>
          <FaArrowLeft className="left-arrow" onClick={prevSlide} />
        </LeftArrow>

        <RightArrow>
          <FaArrowRight className="right-arrow" onClick={nextSlide} />
        </RightArrow>

        {ProjectData.map((item, index) => {
          return (
            <>
              <CardGrid
                className={index === current ? 'item active' : 'item'}
                key={index}
              >
                {index === current && (
                  <div>
                    <Poster src={item.image} alt="project image" />
                    <ProjectName>{item.name}</ProjectName>
                  </div>
                )}
              </CardGrid>
            </>
          )

          
        })}
      </Slider>
    </>
  )
}

const Text = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  margin-top: 3em;
`

const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(155, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  margin-bottom: 5em;
`

const Slider = styled.section`
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const CardGrid = styled.div`
  text-align: center;
  max-width: 400px;
`

const Poster = styled.img`
  border-radius: 10px;
  height: 600px;
  max-width: 400px;
  box-shadow: 0 0 30px crimson;
  @media only screen and (max-width: 500px) {
    height: 300px;
    width: 200px
  }
  @media only screen and (max-width: 700px) {
    height: 400px;
    width: 300px
  }
  
`
const ProjectName = styled.div`
margin-top: 10px;
text-transform: uppercase;
`

const RightArrow = styled.div`
position: absolute;
top: 50%;
right: 32px;
font-size: 1rem;
color: #C1292E;
z-index: 10;
cursor: pointer;
user-select: none;
`

const LeftArrow = styled.div`
position: absolute;
top: 50%;
left: 32px;
font-size: 1rem;
color: #C1292E;
z-index: 10;
cursor: pointer;
user-select: none;
`
