import { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import { Quotes } from "../../components";
import { getQuote } from "../../services/quotes";
import jutsoSound from '../../sounds/jutso.mp3'

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  display: flex;
  justify-content: center;
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
      <Quotes quote={quote} onUpdate={asyncCall} />
    </Content>
  )
}

export {App}