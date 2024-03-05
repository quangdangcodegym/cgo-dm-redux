/*
CÁCH VIẾT CHAY chưa dùng redux toolkit
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

*/

// Cách viết dùng createReducer của redux toolkit
import { createReducer } from "@reduxjs/toolkit";
const inItState = {
  gender: "All",
  age: 30,
  kw: "",
};
const filterReducer = createReducer(inItState, (builder) => {
  builder.addCase("filter/byGender", (state, action) => {
    state.gender = action.payload;
  });
  builder.addCase("filter/byAge", (state, action) => {
    state.age = action.payload;
  });
  builder.addCase("filter/byKw", (state, action) => {
    state.kw = action.payload;
  });
});
export default filterReducer;

//Cách viết dùng createSlice của redux toolkit
/*
createSlice(): combines createReducer() + createAction(). Accepts an object of reducer functions, 
a slice name, and an initial state value, and automatically generates a slice reducer with 
corresponding action creators and action types.

khi viết các case cho reducer phải có dấu {}
OK: 
byGender: (state, action) => {
      state.gender = action.payload;
    }
NOT OK:
byGender: (state, action) => state.gender = action.payload;

*/

/*
import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
  name: "filter",
  initialState: {
    gender: "All",
    age: 30,
    kw: "",
  },
  reducers: {
    byGender: (state, action) => {
      state.gender = action.payload;
    },
    byAge: (state, action) => {
      state.age = action.payload;
    },
    byKw: (state, action) => {
      state.kw = action.payload;
    },
  },
});

export default filterReducer;
*/
