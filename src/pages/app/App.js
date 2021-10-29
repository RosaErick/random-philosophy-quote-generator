import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Quotes } from "../../components";
import { getQuote } from "../../services";
import jutsoSound from "../../sounds/jutso.mp3";

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);

  const state = useState({ quote: "quote", speaker: "author" });

  console.log(state);
  const [quoteState, setQuoteState] = useState({
    quote: "thinking...",
    speaker: "sh...",
  });

  const onUpdate = async () => {
    const quote = await getQuote();

     if (isMounted.current) {
    audio.play();
    setQuoteState(quote);}
  };

  useEffect(() => {
    onUpdate();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes
        quote={quoteState.quote}
        speaker={quoteState.speaker}
        onUpdate={onUpdate}
      />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
