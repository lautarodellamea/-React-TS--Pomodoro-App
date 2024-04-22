import { useEffect, useState } from "react";
import { useRain } from "../hooks/useRain";

export const ControlsRain = () => {

  const { rainState, changeRain, changeVolume } = useRain()
  const [volume, setVolume] = useState(rainState.volume)

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeValue = parseInt(e.target.value, 10);
    changeVolume(volumeValue)
    setVolume(volumeValue)
  }

  const handleRain = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeRain(e.target.value)
  }

  useEffect(() => {
    const audioRainElement = document.getElementById("audio-rain") as HTMLAudioElement
    audioRainElement.volume = volume / 100;
  }, [volume])




  return (
    <div className="controls">
      <div className="controls-item">
        <p>Volumen</p>
        <input className="input-range" type="range" name="" id="" onChange={handleVolume} />
      </div>

      <div className="controls-item">
        <p>Sonido</p>
        <select className="select" value={rainState.name} name="" id="" onChange={handleRain}>
          <option value="lluvia-1.mp3">Lluvia 1</option>
          <option value="lluvia-2.mp3">Lluvia 2</option>
          <option value="lluvia-3.mp3">Lluvia 3</option>

        </select>
      </div>
    </div>
  )
}

