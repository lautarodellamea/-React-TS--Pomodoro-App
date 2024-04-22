import { UIState } from "../interfaces/interfaces"


type UIAction = { type: "SET_MODAL_INFO" } | { type: "SET_MENU_PANEL" }

export const UIReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "SET_MODAL_INFO":
      return {
        ...state,
        modalInfo: !state.modalInfo
      }

    case "SET_MENU_PANEL":
      return {
        ...state,
        menuPanel: !state.menuPanel
      }

    default:
      return state


  }
}