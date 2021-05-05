import styled from "styled-components/macro";


export default function HeroSection() {
  return (
  <>
    <HeroWrapper>

    <HeroPic>
        <img src="./imgfolder/HeroPic.jpeg" alt="profile-pic" style={{ borderRadius:'50%', height: 300}}  />
      <div> 
        <HeroName> João Duarte</HeroName>
        <HR/>
        <HeroJob>Frontend Developer</HeroJob>
        <HR/>

      </div>
    </HeroPic>
    <AboutMe>
          About me  
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate odit, amet ducimus nemo optio ab at provident maiores enim harum nostrum. Iusto cupiditate saepe aperiam aut praesentium fugit laboriosam eos? Ea eum minima nobis facere reprehenderit aut quae! Error nobis aperiam reiciendis praesentium eaque repellendus explicabo impedit, earum consequatur veritatis.</p>
    </AboutMe>


    </HeroWrapper>
    


  </>
  )
}


const HeroWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  justify-content: center;
  // background: crimson;
  padding: 20px;
`

const HeroName = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
`

const HeroJob = styled.p`
  text-transform: uppercase;
  
`

const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(155, 0, 0, 1), rgba(0, 0, 0, 0)); 
`

const HeroPic = styled.div`
  margin-top: 20px;
  border-radius: 15px;
  text-align: center;
`

const AboutMe = styled.div`
  text-align: center;
  margin-top: 50px;
`