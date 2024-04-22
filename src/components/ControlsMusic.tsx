import { useEffect, useState } from "react"
import { useMusic } from "../hooks/useMusic"

export const ControlsMusic = () => {

  const { musicState, changeMusic, changeVolume } = useMusic()

  const [volume, setVolume] = useState(musicState.volume)

  const handleMusic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeMusic(e.target.value)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeValue = parseInt(e.target.value, 10);
    changeVolume(volumeValue)
    setVolume(volumeValue)

  }

  useEffect(() => {
    const audioMusicElement = document.getElementById("audio-music") as HTMLAudioElement
    audioMusicElement.volume = volume / 100;


  }, [volume])


  return (
    <div className="controls">
      <div className="controls-item">
        <p>Volumen</p>
        <input className="input-range" value={volume} type="range" name="" id="" min={0} max={100} onChange={handleVolume} />
      </div>
      <div className="controls-item">
        <p>Canción</p>
        <select className="select" value={musicState.name} onChange={handleMusic} >
          <option value="musica-1.mp3">Música 1</option>
          <option value="musica-2.mp3">Música 2</option>
          <option value="musica-3.mp3">Música 3</option>
          <option value="dofus.mp3">Dofus 1.29</option>
          <option value="stardew-valley.mp3">Stardew Valley</option>
        </select>
      </div>
    </div>
  )
}
