const Reducer = (state, action) => {
    switch (action.type) {
      case 'SET_CURRENT_STEP':
        return {
          ...state,
          currentStep: action.payload,
        };
      case 'SET_PRODUCT_TYPE':
        return {
          ...state,
          productType: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  