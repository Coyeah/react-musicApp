// navIndex.js
const initialState = {
  navIndex: 0,
  navPanel: "",
}

const navIndex = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_CHANGE": {
      return {
        navIndex: action.newNavIndex,
        navPanel: "",
      }
    }
    case "PANEL_CHANGE": {
      return {
        ...state,
        navPanel: action.newPanelText,
      }
    }
    default: 
      return state;
  }
}

export default navIndex;