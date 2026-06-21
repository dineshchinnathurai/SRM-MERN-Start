// import { useState,useEffect } from 'react'
// useEffect -component rendered after click
// useContext - child gets data directly from context
// useContext - no props required

import { createContext,useContext } from "react";

const UserContext = createContext();

function Child(){
  const user = useContext(UserContext);
  return <h2>{user}</h2>
}
function App() {
  return(
    <>
    
    </>
  );
}









// function App() {
//  const [count,setCount] = useState(0);
//  useEffect(()=>{
//   console.log("Run once");
//  },[count]);
//   return (
//   <div>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>
//       Click
//     </button>
//   </div>
//   );
// }

export default App
