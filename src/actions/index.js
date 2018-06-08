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

export const platformIndexChange = newPlatformIndex => {
  return {
    type: "PLATFORM_CHANGE",
    newPlatformIndex
  }
}

export const playerChange = () => {
  return {
    type: "PLAYER_CHANGE",
  }
}