import { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import { Quotes} from "../../components";
import { getQuote } from "../../services/quotes";
import jutsoSound from '../../sounds/jutso.mp3';
import Loader from "../../components/quotes/Loader.js";
const Content = styled.div`
  height: 100vh;

  padding: 5px;
  display: flex;
  justify-content: sp;
  align-items: center;
`;




const App = () => {
  const [quote, setQuote] = useState('')
  const audio = useRef(null)



  const asyncCall = async () => {
    const quote = await getQuote()
  
      setQuote(quote)
      audio.current.play()
    
  }
  
  useEffect(() => {
    audio.current = new Audio(jutsoSound);
  })
  
  return (

      

    <Content>
      <div className="quoteSpace"> {quote ? quote : <Loader /> }</div>
      <Quotes   onUpdate={asyncCall} />
      
    </Content>
  )
}

export {App}