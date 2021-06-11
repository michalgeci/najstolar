const Reducer = (state, action) => {
    switch (action.type) {

      case 'SET_CURRENT_STEP':
        return {
          ...state,
          currentStep: action.payload,
        };

      case 'SET_PRODUCT_TYPE':
        var descriptions = state.stepsDescription
        switch (action.payload) {
          case 0:
            descriptions[0] = "Vstavaná skriňa"
            break;
          case 1:
            descriptions[0] = "Vnútro skriňe"
            break;
          case 2:
            descriptions[0] = "Posuvný systém"
            break;
          default:
            break;
        }
        return {
          ...state,
          productType: action.payload,
          stepsDescription: descriptions
        };

      default:
        return state;
    }
  };
  
  export default Reducer;
  