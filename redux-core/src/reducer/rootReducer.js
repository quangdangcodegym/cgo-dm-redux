// Cách viết khi chưa chia các tính năng:
/*
const initState = {
  students: [
    {
      id: 1,
      name: "Quang Dang",
      gender: "Male",
      age: 32,
    },
    {
      id: 2,
      name: "Ly Ly",
      gender: "Female",
      age: 26,
    },
    {
      id: 3,
      name: "Bình Minh",
      gender: "Male",
      age: 50,
    },
  ],
  filter: {
    gender: "All",
    age: 30,
    kw: "",
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "students/getAll": {
      return {
        ...state,
        filter: {
          kw: "",
          age: 100,
          gender: "All",
        },
      };
    }
    case "filter/byGender": {
      return {
        ...state,
        filter: { ...state.filter, gender: action.payload },
      };
    }
    case "filter/byAge": {
      return {
        ...state,
        filter: { ...state.filter, age: action.payload },
      };
    }
    case "filter/byKw": {
      return {
        ...state,
        filter: { ...state.filter, kw: action.payload },
      };
    }
    default: {
      return state;
    }
  }
};
export default rootReducer;

*/

import { combineReducers } from "redux";
import studentsReducer from "../components/Component5Slice";
import filterReducer from "./../components/Component3Slice";

const rootReducer = combineReducers({
  students: studentsReducer,
  filter: filterReducer,
});

export default rootReducer;
