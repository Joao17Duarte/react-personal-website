import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;  
  font-size: 112.5%;
  margin: 0 auto;
  background-color: #312f2f;
  color:white;
  max-width: 1000px;
}

.vertical-timeline-element-content {
  background-color: #312f2f;
  box-shadow: 0 0 10px #555;
  padding: 2em !important;
  border-radius: 5px;
}

@media only screen and (max-width: 1700px) {
  .vertical-timeline-element-date {
    display: block !important;
    float: none !important;
    color: white;
    margin-top: 1.5em;
  }
  a {
    font-size: 14px !important;
    padding: 10px  !important;
  }
}

` 