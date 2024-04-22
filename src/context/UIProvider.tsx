import { useReducer } from "react"
import { UIContext } from "./UIContext"
import { UIReducer } from "../reducers/UIReducer"

const INITIAL_STATE = {
  modalInfo: false,
  menuPanel: false
}

interface UIProviderProps {

  children: JSX.Element | JSX.Element[]
}

export const UIProvider = ({ children }: UIProviderProps) => {

  const [UIState, dispatch] = useReducer(UIReducer, INITIAL_STATE)


  const setModalInfo = () => {
    dispatch({ type: "SET_MODAL_INFO" })
  }
  const setMenuPanel = () => {
    dispatch({ type: "SET_MENU_PANEL" })
  }



  return (
    <UIContext.Provider value={{ UIState, setModalInfo, setMenuPanel }}>{children}</UIContext.Provider>
  )
}