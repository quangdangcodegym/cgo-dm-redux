const inItState = {
  gender: "All",
  age: 30,
  kw: "",
};
const filterReducer = (state = inItState, action) => {
  switch (action.type) {
    case "filter/byGender": {
      return {
        ...state,
        gender: action.payload,
      };
    }
    case "filter/byAge": {
      return {
        ...state,
        age: action.payload,
      };
    }
    case "filter/byKw": {
      return {
        ...state,
        kw: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
