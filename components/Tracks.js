import React from "react"
import TableHeader from "./TableHeader"
import Track from "./Track"

const tracks = [
    {
      id: 1,
      src: "helloNeighbor.mp3",
      title: "Hello There Neighbor - Call Sign",
      artist: "DJ Fuzz",
      album: "Better Radio Call Signs",
      imgSrc: "https://unsplash.it/40/40",
      duration: "0:10",
    },
    {
      id: 2,
      src: "turnItUp.mp3",
      title: "Turn It Up",
      artist: "DJ Fuzz",
      album: "Better Radio Call Signs",
      imgSrc: "https://unsplash.it/40/40",
      duration: "3:52",
    },
    {
      id: 3,
      src: "oldManCallSign.mp3",
      title: "Old Man - Call Sign",
      artist: "DJ Fuzz",
      album: "Better Radio Call Signs",
      imgSrc: "https://unsplash.it/40/40",
      duration: "0:28",
    },
    {
        id: 4,
        src: "cheeboStarsOut.mp3",
        title: "No Rain... Stars Are Out",
        artist: "Cheebo",
        album: "Better Radio Call Signs",
        imgSrc: "https://unsplash.it/40/40",
        duration: "0:31",
      },
      {
        id: 5,
        src: "bellmanReallyRocks.mp3",
        title: "The Only Station That Really Rocks",
        artist: "Nick Bellman",
        album: "Better Radio Call Signs",
        imgSrc: "https://unsplash.it/40/40",
        duration: "0:10",
      },
  ];

export default function Tracks ({
    playing,
    setPlaying,
    selectedHowl,
    setSelectedHowl,
}) {
    return (
        <div className="w-full mx-auto px-4 py-2">
            <TableHeader />
           {tracks.map((track, idx) => {
            return (
                <Track  
                    key={track.id}
                    track={track}
                    selectedHowl={selectedHowl}
                    setSelectedHowl={setSelectedHowl}
                    playing={playing}
                    setPlaying={setPlaying}
                    isFirstTrack={idx === 0}
                />
            )
           })}
        </div>
    )
}