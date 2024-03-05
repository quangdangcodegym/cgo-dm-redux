/*
// Nếu viết CHAY reducer thì thằng
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
      console.log("state", state); // chỉ là object bình thường
      console.log("VAO ĐÂY EM", action.payload);
      return [...action.payload];
    }

    default:
      return state;
  }
};

export default studentsReducer;
*/
/*
// NẾU DÙNG REDUX TOOLKIT:
// Nếu initState là array thì khi dùng createReducer để tạo reducer thì thằng toolkit gọi bất đồng bộ nó không cho
// Nếu initState là object thì khi gọi bất đồng bộ lại cho

thử debug bằng log thì thấy rằng khi mình khởi tạo reducer mà initState là dạng mảng thì thằng 
toolkit nó bọc cái state trong một proxy object (khả năng là để viết theo dạng mutate gì đấy) 
nên nó không hiểu được sự thay đổi của state trong store, 
nếu mình viết reducer thuần thì vẫn OK (em có test thử). 
Vì vậy khi mình có dispatch một action với payload là một mảng mới thì nó State 
nó vẫn không thay đổi (kể cả không dùng async await)

import { createReducer } from "@reduxjs/toolkit";
export const inItState = {
  data: [
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
};

const studentsReducer = createReducer(inItState, (builder) => {
  builder.addCase("students/getAll", (state, action) => {
    // console.log(state);     // là một proxy object
    // console.log("VAO ĐÂY EM", action.payload);
    // state.data = [...action.payload];      
    state.data = action.payload;      // Sửa state trực tiếp theo dạng mutate luôn
  });
});
export default studentsReducer;

*/

import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import StudentService from "./StudentService";

// đây là một action creator
export const studentsAPI = createAsyncThunk(
  "getAllAPI",
  async (arg, { rejectWithValue }) => {
    try {
      let studentService = new StudentService();
      let res = await studentService.getAllStudents(arg);
      return res;
    } catch (err) {
      return rejectWithValue("Error getting all students");
    }
  }
);
const studentReducer = createSlice({
  name: "students",
  initialState: {
    data: [
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
  },
  reducers: {
    getAll: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    console.log(studentsAPI);
    builder.addCase(studentsAPI.pending, (state, action) => {});
    builder.addCase(studentsAPI.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default studentReducer;
