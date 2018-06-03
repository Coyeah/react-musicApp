// myList.js
const initialState = {
  songListOpen: true,
  collectListOpen: true,
}

const myList = (state = initialState, action) => {
  switch (action.type) {
    case "SONGLIST_CHANGE": {
      return {
        ...state,
        songListOpen: !state.songListOpen,
      }
    }
    case "COLLECTLIST_CHANGE": {
      return {
        ...state,
        collectListOpen: !state.collectListOpen,
      }
    }
    default:
      return state;
  }
}

export default myList;