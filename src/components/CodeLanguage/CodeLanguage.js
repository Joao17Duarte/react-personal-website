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
  padding: 15px 0;
  list-style: none;
  font-size: 2.5em;
`

const CodeItem = styled.li`
margin: 10px;
padding:10px;
&:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
`

const HR = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(155, 0, 0, 1), rgba(0, 0, 0, 0)); 
  margin-bottom: 2em;
`

