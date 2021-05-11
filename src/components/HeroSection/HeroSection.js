import styled from 'styled-components/macro'

export default function HeroSection() {
  return (
    <>
      <HeroWrapper>
        <HeroPic>
          <img
            src="./assets/profile.jpg"
            alt="profile-pic"
            style={{ borderRadius: '50%', height: 300 }}
          />
          <div>
            <HeroName> João Duarte</HeroName>
            <HR />
            <HeroJob>Frontend Developer</HeroJob>
            <HR />
          </div>
        </HeroPic>
        <AboutMe>
          <p>
            Hi there, I'm João Duarte, 28 years old from Lisbon, Portugal and
            living since November 2017 in Hamburg, Germany. After a 6 year
            career in the Wellness area and with a passion for Tech, I decided
            to invest in my education.
          </p>
          <p>
            Started by doing online courses via the Udemy Platform, and since
            these courses, I got even more interested in coding. In 2020, I lost
            my job as Spa-Therapist because of the Corona Virus and got the
            opportunity to do a Web Development Bootcamp here in Hamburg, where
            I improved my coding skills.
          </p>
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
  padding: 20px;
`

const HeroName = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  margin-top: 1.5em;
`

const HeroJob = styled.p`
  text-transform: uppercase;
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
