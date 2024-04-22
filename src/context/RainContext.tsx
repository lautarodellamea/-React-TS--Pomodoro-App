import { createContext } from "react";
import { SoundState } from "../interfaces/interfaces";

type RainContextProps = {
  rainState: SoundState
  playRain: () => void
  changeRain: (value: string) => void
  changeVolume: (value: number) => void
}

export const RainContext = createContext<RainContextProps>({} as RainContextProps)