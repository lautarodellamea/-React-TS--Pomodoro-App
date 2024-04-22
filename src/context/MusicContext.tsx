import { createContext } from "react";
import { SoundState } from "../interfaces/interfaces";

type MusicContextProps = {
  musicState: SoundState,
  playMusic: () => void
  changeMusic: (value: string) => void
  changeVolume: (value: number) => void

}

export const MusicContext = createContext<MusicContextProps>({} as MusicContextProps)

