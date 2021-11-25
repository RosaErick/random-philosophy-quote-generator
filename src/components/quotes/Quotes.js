import styled from "styled-components";
import { Button } from '../../components';


export const Quotes = ({quote, onUpdate }) => (
  <Wrapper>
  
  
    <Quote>{quote}</Quote>
    <Button onClick={onUpdate}> bring me knowledge...</Button>
  </Wrapper>
)

const Wrapper = styled.div` 
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-right:55em;
  margin-bottom:20em;
  margin-top:15em;
  justify-content:space-between;
`


const Quote = styled.p` 
  font-size:1.6em;
  margin:0 0 50px;
  width:400px;
 


`

