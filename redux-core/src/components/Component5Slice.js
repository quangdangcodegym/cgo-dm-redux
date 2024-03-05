export const inItState = [
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
];

const studentsReducer = (state = inItState, action) => {
  switch (action.type) {
    case "students/getAll": {
      return [...action.payload];
    }

    default:
      return state;
  }
};

export default studentsReducer;
