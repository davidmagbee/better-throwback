'use client'

import { useState } from "react";
import Header from "@/components/Header";
import Tracks from "@/components/Tracks";

export default function Home() {
  const [selectedHowl, setSelectedHowl] = useState(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <Header 
        playing={playing}
        setPlaying={setPlaying}
        selectedHowl={selectedHowl}
      />
      <Tracks 
        playing={playing}
        setPlaying={setPlaying}
        selectedHowl={selectedHowl}
        setSelectedHowl={setSelectedHowl}
      />
    </div>
  );
}
