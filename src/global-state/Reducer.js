const Reducer = (state, action) => {
    switch (action.type) {
      case 'SET_STATUS_BAR_COLOR':
        return {
          ...state,
          statusBarColor: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  