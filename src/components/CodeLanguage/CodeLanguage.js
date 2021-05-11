import styled from "styled-components/macro";

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';


export default function Contacts() {
  return (
    <div>
      
      <Text>Stacks of Choice</Text>

      <HR/>
      <CodeLang>
        <CodeItem><FaHtml5/></CodeItem>
        <CodeItem><FaCss3Alt/></CodeItem>
        <CodeItem><FaJsSquare/></CodeItem>
        <CodeItem><FaReact/></CodeItem>
        <CodeItem><FaNodeJs/></CodeItem>
      
      </CodeLang>
      
    </div>
  )
}

const Text = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  margin-top: 3em;
`
const CodeLang = styled.ul`
  display:flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding:15px auto;
  list-style: none;
  font-size:2.5em;
`

const CodeItem = styled.li`
margin: 10px;
padding:10px;
`

const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(155, 0, 0, 1), rgba(0, 0, 0, 0)); 
  margin-bottom: 2em;
`