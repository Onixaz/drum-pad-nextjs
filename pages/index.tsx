import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import * as Styled from '../styles/components'
import { drums } from '../utils/presets'

interface IndexPageProps { }

const Home: NextPage<IndexPageProps> = () => {

  const [title, setTitle] = useState('');
  const clips = useRef<any>([])


  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event;
    const foundClip = drums.find((obj) => obj.keyCode === keyCode)
    if (foundClip) {
      play(foundClip.id, foundClip.name)
    }
  }, []);

  const addToRefs = (el: any) => {
    if (el && !clips.current.includes(el)) {
      clips.current.push(el);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const play = (id: number, name: string) => {
    setTitle(name)
    const clip = clips.current[id];
    if (clip) {
      clip.currentTime = 0;
      clip.play();
    }

  }

  return (
    <Styled.Container id="drum-machine">
      <Styled.Title>Drum machine!</Styled.Title>
      <Styled.Grid >
        {drums && drums.map((el) => {
          return <Styled.Button className='drum-pad' id={el.keyTrigger} key={el.keyTrigger} onClick={() => play(el.id, el.name)} >
            <audio src={el.url} key={el.id} ref={(audio) => addToRefs(audio)} className='clip' id={el.keyTrigger} />{el.keyTrigger}</Styled.Button>
        })}
      </Styled.Grid>
      <Styled.Display id="display">{title}</Styled.Display>
      <Styled.Link href="https://github.com/Onixaz/drum-pad-nextjs">Source code</Styled.Link>
    </Styled.Container >
  )
}

export default Home


