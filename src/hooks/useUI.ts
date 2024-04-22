import { useContext } from "react"
import { UIContext } from "../context/UIContext"

export const useUI = () => {

  const { UIState, setMenuPanel, setModalInfo } = useContext(UIContext)




  return {
    UIState,
    setMenuPanel,
    setModalInfo
  }


}