import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import * as Styled from '../styles/components'
import { drums } from '../utils/presets'

interface IndexPageProps { }

const Home: NextPage<IndexPageProps> = () => {

  const [title, setTitile] = useState('');
  const clips = Array.from({ length: drums.length }, a => useRef<any>(null));

  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event;
    const foundClip = drums.find((obj) => obj.keyCode === keyCode)
    if (foundClip) {
      play(foundClip.id, foundClip.name)
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const play = (id: number, name: string) => {
    setTitile(name)
    clips[id].current.currentTime = 0;
    clips[id].current.play();
  }

  return (
    <Styled.Container id="drum-machine">     
      <Styled.Grid >
        {drums && drums.map((el) =>
          <Styled.Button className='drum-pad' id={el.keyTrigger} key={el.keyTrigger} onClick={() => play(el.id, el.name)} >
            <audio src={el.url} ref={clips[el.id]} className='clip' id={el.keyTrigger} />{el.keyTrigger}</Styled.Button>
        )}
      </Styled.Grid>
      <Styled.Display id="display">{title}</Styled.Display>
    </Styled.Container>
  )
}

export default Home


