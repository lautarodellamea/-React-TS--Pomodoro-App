import { useContext } from "react"
import { RainContext } from "../context/RainContext"

export const useRain = () => {

  const { rainState, playRain, changeRain, changeVolume } = useContext(RainContext)



  return {
    rainState,
    playRain,
    changeRain,
    changeVolume
  }
}
