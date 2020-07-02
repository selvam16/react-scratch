const initialState = { appName:'test App' };
const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'APP_STATUS':
      return state;
    default:
      return state;
  }
}

export default appReducer;
