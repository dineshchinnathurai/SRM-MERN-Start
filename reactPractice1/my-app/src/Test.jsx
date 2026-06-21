function App() {

  const students = [
    "Dinesh",
    "Ravi",
    "Kiran",
    "Sai"
  ];

  return (
    <div>

      <h1>Students</h1>

      {
        students.map(
          (student, index) => (
            <h2 key={index}>
              {student}
            </h2>
          )
        )
      }

    </div>
  );
}

export default App;



// import { useState } from "react";

// function App() {

//   const [student, setStudent] =
//   useState({
//     name: "",
//     age: ""
//   });

//   return (
//     <div>

//       <h1>Student Form</h1>

//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) =>
//           setStudent({
//             ...student,
//             name: e.target.value
//           })
//         }
//       />

//       <br /><br />

//       <input
//         type="number"
//         placeholder="Age"
//         onChange={(e) =>
//           setStudent({
//             ...student,
//             age: e.target.value
//           })
//         }
//       />

//       <h2>Name: {student.name}</h2>
//       <h2>Age: {student.age}</h2>

//     </div>
//   );
// }

// export default App;




// import { useState } from "react";

// function App() {

//   const [show, setShow] =
//   useState(true);

//   return (
//     <div>

//       <button
//         onClick={() =>
//           setShow(!show)
//         } 
//       >
//         Toggle
//       </button>

//       {
//         show &&
//         <h1>Hello React</h1>
//       }

//     </div>
//   );
// }

// export default App;





// import { useState } from "react";

// function App() {

//   const [count, setCount] =
//   useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div>

//       <h1>Count: {count}</h1>

//       <button onClick={increase}>
//         Increase
//       </button>

//       <button onClick={decrease}>
//         Decrease
//       </button>

//     </div>
//   );
// }

// export default App;




// import { useState } from "react";

// function App() {

//   const [status, setStatus] =
//   useState(false);

//   return (
//     <div>

//       <h1>
//         {
//           status
//           ? "Light ON"
//           : "Light OFF"
//         }
//       </h1>

//       <button
//         onClick={() =>
//           setStatus(!status)
//         }
//       >
//         Toggle
//       </button>

//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {

//   const [text, setText] = useState("");

//   return (
//     <div>

//       <h1>Text Mirroring</h1>

//       <input
//         type="text"
//         placeholder="Enter text"
//         onChange={(e) =>
//           setText(e.target.value)
//         }
//       />

//       <h2>You Typed: {text}</h2>

//     </div>
//   );
// }

// export default App;