import styled from "styled-components/macro";

import { FaGithub } from 'react-icons/fa';
import { FaXingSquare } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';


export default function Contacts() {
  return (
    <div>
      
      <Text>Socials</Text>

      <HR/>
  
      <ContactWrapper>
        <ContactItem target='_blank' href="https://github.com/Joao17Duarte">
          <FaGithub/> 
        </ContactItem>
        <ContactItem target='_blank' href="https://www.xing.com/profile/JoaoPauloFonseca_Duarte/cv">
          <FaXingSquare/>
        </ContactItem>
        <ContactItem target='_blank' href="https://codepen.io/jo-o-duarte">
          <FaCodepen/>
        </ContactItem>
      </ContactWrapper>
    </div>
  )
}

const Text = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  margin-top: 3em;
`

const ContactWrapper = styled.ul`
  display:flex;
  flex-direction: row wrap;
  justify-content: space-around;
  padding:15px auto;
`

const ContactItem = styled.a`
  color: white;
  font-size: 2em;
  
  &:hover{
    font-size:2.3em;  
    color: #C1292E;
}
`
const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(155, 0, 0, 1), rgba(0, 0, 0, 0)); 
  margin-bottom: 2em;
`