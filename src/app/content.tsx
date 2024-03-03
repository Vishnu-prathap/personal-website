"use client";
import { useRef, useState } from "react";
import About from "./components/home-page/About";
import Contact from "./components/home-page/Contact";
import Home from "./components/home-page/Home";
import Introduction from "./components/home-page/Introduction";
import Skills from "./components/home-page/Skills";
import { Button } from "@nextui-org/react";
import { AiTwotoneSound } from "react-icons/ai";

export default function Content() {
  const [toggleSound, setToggleSound] = useState(true);
  const audioRef =
    useRef<HTMLAudioElement>() as React.RefObject<HTMLAudioElement>;
  // useEffect(() => {
  //   audioRef.current?.play();
  // }, []);
  return (
    <main
      className='w-full h-full overflow-hidden no-scrollbar'
      onClick={(e: { preventDefault: () => void }) => {
        e.preventDefault();
        audioRef.current && (audioRef.current.volume = 0.5);
        audioRef.current?.paused && audioRef.current?.play();
        setToggleSound(true);
      }}>
      {toggleSound && (
        <audio src='/theme.mp3' ref={audioRef} className='bg-white' autoPlay />
      )}

      <Home />

      <Introduction />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
