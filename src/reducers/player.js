// player.js
const initialState = {
  isPlay: false,
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER_CHANGE": {
      return {
        ...state,
        isPlay: !state.isPlay,
      }
    }
    default:
      return state;
  }
}

export default player;