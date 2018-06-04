// platform.js
const initialState = {
  platformIndex: 0,
}

const platform = (state = initialState, action) => {
  switch (action.type) {
    case "PLATFORM_CHANGE": {
      return {
        platformIndex: action.newPlatformIndex
      }
    }
    default:
      return state;
  }
}

export default platform;