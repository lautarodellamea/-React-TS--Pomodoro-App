import { useReducer } from "react"
import { RainContext } from "./RainContext"
import { rainReducer } from "../reducers/rainReducer"

const INITIAL_STATE = {

  isPlaying: false,
  name: "lluvia-2.mp3",
  volume: 50
}

type RainProviderProps = {
  children: JSX.Element | JSX.Element[]
}
export const RainProvider = ({ children }: RainProviderProps) => {

  const [rainState, dispatch] = useReducer(rainReducer, INITIAL_STATE)


  const playRain = () => {
    dispatch({ type: "PLAY_RAIN" })
  }

  const changeRain = (value: string) => {
    dispatch({ type: "TYPE_RAIN", payload: value })
  }
  const changeVolume = (value: number) => {
    dispatch({ type: "VOLUME_RAIN", payload: value })
  }



  return (
    <RainContext.Provider value={{ rainState, playRain, changeRain, changeVolume }}>{children}</RainContext.Provider>
  )
}
