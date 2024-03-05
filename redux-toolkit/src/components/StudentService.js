export default class StudentService {
  static studentList = [
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
    {
      id: 4,
      name: "Hồng Anh",
      gender: "Male",
      age: 33,
    },
    {
      id: 5,
      name: "Tiến Dũng",
      gender: "Female",
      age: 28,
    },
  ];

  async getAllStudents(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);
  }
}
