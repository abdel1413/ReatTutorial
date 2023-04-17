import React from "react";
import ReactDOM from "react-dom/client";

let firstElement = <h1>Hello world!!!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(firstElement);

//in react map() can be used to generate elements from an array as a list
let myArray = ["one", "two", "three"];
let ar = myArray.map((item) => <p>{item}</p>);
root.render(ar);
//ReactDOM.render(ar, document.getElementById("root"));
