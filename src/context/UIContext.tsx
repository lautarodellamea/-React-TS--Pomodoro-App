import { createContext } from "react";
import { UIState } from '../interfaces/interfaces';

type UIContextProps = {
  UIState: UIState
  setModalInfo: () => void
  setMenuPanel: () => void
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps)