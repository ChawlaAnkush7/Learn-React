import React, { useState } from "react";

//useState Hook Basic Intro

const UseStateHook = () => {
  const [color, setColor] = useState("red");
  const changeColorBlue = () => {
    setColor("blue");
  };
  const changeColorGreen = () => {
    setColor("green");
  };
  const changeColorYellow = () => {
    setColor("yellow");
  };
  return (
    <>
      <section>
        <h1 className="text-center">UseState-Hook Basic</h1>
        <p>My favourite color is {color}</p>
        <button onClick={changeColorBlue}>blue</button>
        <button onClick={changeColorGreen}>green</button>
        <button onClick={changeColorYellow}>yellow</button>
      </section>
    </>
  );
};

//UseState Hook in Objects-How to change object property in useState

// const UseStateHook = () => {
//   const [car, setCar] = useState({
//     brand: "ford",
//     model: "mustang",
//     year: "1964",
//     color: "red",
//   });
//   const changeCarProps = () => {
//     setCar((car) => {
//       return { ...car, color: "blue", year: "2024" };
//     });
//   };
//   return (
//     <>
//       <section>
//         <h1 className="text-center">UseStateHook in objects</h1>
//         <p>my {car.brand} car</p>
//         <p>
//           It is a {car.model} {car.brand} car. Its Model is {car.model}. Its
//           year of manufacturing is {car.year}. Its color is {car.color}
//         </p>
//         <button onClick={changeCarProps}>update card props</button>
//       </section>
//     </>
//   );
// };
// export default UseStateHook;

//UseState Hook in Array-How to change the value in array using UseState

// const UseStateHook = () => {
//   const [task, setTask] = useState("");
//   const [arr, setArr] = useState([]);
//   const AddTask = () => {
//     setArr([...arr, { id: arr.length, task: task }]);
//     setTask("");
//   };
//   return (
//     <>
//       <section>
//         <input
//           id="input"
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button className="ms-1" onClick={AddTask}>
//           Add
//         </button>
//         <ol>
//           {arr.map((elem, index) => (
//             <li id={elem.id} className="mb-1" key={index}>
//               {elem.task}
//               <button
//                 className="ms-1"
//                 onClick={() => {
//                   setArr(
//                     arr.filter((a) => {
//                       a.id !== elem.id;
//                     })
//                   );
//                 }}
//               >
//                 delete
//               </button>
//             </li>
//           ))}
//         </ol>
//       </section>
//     </>
//   );
// };

//practice useState with arrays

// const UseStateHook = () => {
//   const [text, setText] = useState("");
//   const [data, setData] = useState([]);
//   const addTask = () => {
//     setData([...data, { id: data.length, task: text }]), setText("");
//   };
//   const deleteTask = (index) => {
//     console.log(index);
//     setData(data.filter((n, i) => i !== index));
//   };
//   console.log(data);
//   return (
//     <>
//       <section>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button onClick={addTask} className="ms-1">
//           Add
//         </button>
//         <ul>
//           {data.map((elem, index) => {
//             return (
//               <li className="mb-1" key={index}>
//                 {elem.task}{" "}
//                 <button onClick={() => deleteTask(index)} className="ms-1">
//                   delete
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </>
//   );
// };

export default UseStateHook;
