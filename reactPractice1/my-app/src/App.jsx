
import { useState } from "react";

import Header from "./components/Header";
import CourseList from "./components/CourseList";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const courses = [
    "ReactJS",
    "NodeJS",
    "MongoDB",
    "ExpressJS"
  ];

  const [studentName, setStudentName] =
    useState("");

  const [students, setStudents] =
    useState([
      "Rahul",
      "Priya"
    ]);

  const [showStudents, setShowStudents] =
    useState(true);

  function registerStudent() {

    if (studentName === "") {
      alert("Please enter name");
      return;
    }

    setStudents([
      ...students,
      studentName
    ]);

    setStudentName("");
  }

  return (
    <div className="container">

      <Header
        title="SRM Student Course Portal"
      />

      <h2>
        Welcome Student
      </h2>

      <CourseList
        courses={courses}
      />

      <hr />

      <h2>
        Student Registration
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={studentName}
        onChange={(e) =>
          setStudentName(e.target.value)
        }
      />

      <button
        onClick={registerStudent}
      >
        Register
      </button>

      <h3>
        Total Students:
        {students.length}
      </h3>

      <button
        onClick={() =>
          setShowStudents(!showStudents)
        }
      >
        {
          showStudents
            ? "Hide Students"
            : "Show Students"
        }
      </button>

      {
        showStudents &&
        <StudentList
          students={students}
        />
      }

      <Footer />

    </div>
  );
}

export default App;







// import { useState } from "react";
// import StudentList from "./components/StudentList";
// import "./App.css";

// function App() {

//   const [name, setName] = useState("");

//   const [students, setStudents] =
//     useState([
//       "Dinesh",
//       "Rahul"
//     ]);

//   const [show, setShow] =
//     useState(true);

//   function addStudent() {

//     if (name === "") {
//       alert("Enter student name");
//       return;
//     }

//     setStudents([
//       ...students,
//       name
//     ]);

//     setName("");
//   }

//   return (
//     <div className="container">

//       <h1>
//         Student Management Dashboard
//       </h1>

//       <input
//         type="text"
//         placeholder="Enter Student Name"
//         value={name}
//         onChange={(e) =>
//           setName(e.target.value)
//         }
//       />

//       <button
//         onClick={addStudent}
//       >
//         Add Student
//       </button>

//       <h3>
//         Total Students:
//         {students.length}
//       </h3>

//       <button
//         onClick={() =>
//           setShow(!show)
//         }
//       >
//         {
//           show
//             ? "Hide Students"
//             : "Show Students"
//         }
//       </button>

//       {
//         show &&
//         <StudentList
//           students={students}
//         />
//       }

//     </div>
//   );
// }

// export default App;











// import { useState } from "react";
// import Profile from "./components/Profile";

// function App() {

//     const [name, setName] =
//         useState("");

//     const [course, setCourse] =
//         useState("");

//     const [showProfile, setShowProfile] =
//         useState(false);

//     function generateProfile() {

//         if (name === "" || course === "") {

//             alert("Please fill all fields");

//             return;
//         }

//         setShowProfile(true);
//     }

//     return (
//         <div>

//             <h1>
//                 Student Profile Generator
//             </h1>

//             <input
//                 type="text"
//                 placeholder="Enter Name"
//                 onChange={(e) =>
//                     setName(e.target.value)
//                 }
//             />

//             <br /><br />

//             <input
//                 type="text"
//                 placeholder="Enter Course"
//                 onChange={(e) =>
//                     setCourse(e.target.value)
//                 }
//             />

//             <br /><br />

//             <button
//                 onClick={generateProfile}
//             >
//                 Generate Profile
//             </button>

//             <hr />

//             {
//                 showProfile
//                     ?
//                     <Profile
//                         name={name}
//                         course={course}
//                     />
//                     :
//                     <h3>
//                         No profile generated yet.
//                     </h3>
//             }

//         </div>
//     );
// }

// export default App;






// import Header from "./include/Header";

// function App() {
//   return (
//     <>
//       <Header />
//     </>
//   );
// }

// export default App;