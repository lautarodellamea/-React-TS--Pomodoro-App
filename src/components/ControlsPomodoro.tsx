import { useEffect, useState } from "react"
import { usePomodoro } from "../hooks/usePomodoro"



export const ControlsPomodoro = () => {

  const { pomodoroState, playPomodoro, changeAlarm, changeMode, changeSessionTime, changeBreakTime } = usePomodoro()

  const [volume, setVolume] = useState(pomodoroState.volume)
  const [workMinutes, setWorkMinutes] = useState(pomodoroState.sessionTime)
  const [breakMinutes, setBreakMinutes] = useState(pomodoroState.breakTime)


  const handleAlarm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeAlarm(e.target.value)
    playPomodoro()
  }


  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeValue = parseInt(e.target.value, 10);
    // changeVolume(volumeValue)
    setVolume(volumeValue)


  }
  const handleMode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeMode(e.target.value)
  }


  const handleWorkMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const workMinutesValue = parseInt(e.target.value, 10);
    setWorkMinutes(workMinutesValue)

  }

  const handleBreakMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const breakMinutesValue = parseInt(e.target.value, 10);
    setBreakMinutes(breakMinutesValue)


  }




  useEffect(() => {
    const audioAlarmElement = document.getElementById("audio-alarm") as HTMLAudioElement
    audioAlarmElement.volume = volume / 100;


  }, [volume])

  useEffect(() => {
    changeSessionTime(workMinutes)

  }, [workMinutes])

  useEffect(() => {
    changeBreakTime(breakMinutes)

  }, [breakMinutes])




  return (
    <div className="controls">
      <div className="controls-item">
        <p>Volumen</p>
        <input className="input-range" value={volume} type="range" name="" id="" min={0} max={100} onChange={handleVolume} />
      </div>
      <div className="controls-item">
        <p>Alarma</p>
        <select className="select" value={pomodoroState.name} onChange={handleAlarm} >
          <option value="alarm-1.mp3">Alarma 1</option>
          <option value="alarm-2.mp3">Alarma 2</option>
          <option value="alarm-3.mp3">Alarma 3</option>
          <option value="alarm-4.mp3">Alarma 4</option>
          <option value="alarm-5.mp3">Alarma 5</option>
          <option value="alarm-6.mp3">Alarma 6</option>
          <option value="alarm-7.mp3">Alarma 7</option>
        </select>
      </div>
      <div className="controls-item">
        <p>Modo</p>
        <select className="select" value={pomodoroState.mode} onChange={handleMode} >
          <option value="modo-1">Modo 1</option>
          <option value="modo-2">Modo 2</option>
          <option value="modo-3">Modo 3</option>
        </select>
      </div>
      <div className="controls-item controls-item-pomodoro">
        <p>Ajustar</p>
        <div className="controls-pomodoro-settings">
          <div className="control-pomodoro">
            <p>Duracion de la sesión</p>
            <input className="input-range" value={workMinutes} type="range" name="" id="" min={0} max={60} onChange={handleWorkMinutes} />

          </div>
          <div className="control-pomodoro">
            <p>Duracion del recreo</p>
            <input className="input-range" value={breakMinutes} type="range" name="" id="" min={0} max={20} onChange={handleBreakMinutes} />
          </div>
          <div className=" control-pomodoro-buttons">
            <button className="control-pomodoro-button-apply">Aplicar</button>
            <button className="control-pomodoro-button-reset">Resetear</button>

          </div>

        </div>
      </div>
      <pre>{JSON.stringify(pomodoroState, null, 2)}</pre>
    </div>
  )
}
