// index.js
export const navChange = newNavIndex => {
  return {
    type: "NAV_CHANGE",
    newNavIndex
  }
}

export const panelChange = newPanelText => {
  return {
    type: "PANEL_CHANGE",
    newPanelText
  }
}

export const songListChange = () => {
  return {
    type: "SONGLIST_CHANGE",
  }
}

export const collectListChange = () => {
  return {
    type: "COLLECTLIST_CHANGE",
  }
}