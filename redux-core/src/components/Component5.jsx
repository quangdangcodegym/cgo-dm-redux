import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StudentService  from './StudentService';

export default function Component5() {

  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const { kw, gender, age} = useSelector(state => state.filter);


  console.log("selector", kw, gender, age);
  const queryStudentList = ()=>{
    let queryStudents = [...students];

    if(kw){
      queryStudents = students.filter(s => s.name.toLowerCase().includes(kw.toLowerCase()));
    }
    if(gender !== 'All'){
      queryStudents = students.filter(s => s.gender.toLowerCase() == gender.toLowerCase());
    }

    return queryStudents;
  }
  
  let remainingStudents = queryStudentList();
  console.log("RERENDER Component 5");

  const handleGetAllLocal = ()=>{
      dispatch({ type: "students/getAll", payload: StudentService.studentList});
    
  }
  const handleGetAllServer = ()=>{
    const getAllFunc = async ()=>{
      let studentService = new StudentService();
      let res = await studentService.getAllStudents("http://localhost:3000/students");
      dispatch({ type: "students/getAll", payload: res});
    }
    getAllFunc();
    
  }
    return (
      <>
        <h2>Component 5: </h2>
        <button onClick={handleGetAllLocal}>Get local</button>
        <button onClick={handleGetAllServer}>Get server</button>
        { 
          remainingStudents.map(s => (
            <p key={s.id}>{s.name} - Gender {s.gender} - Age {s.age}</p>
          ))
        }
      </>
    );
  }