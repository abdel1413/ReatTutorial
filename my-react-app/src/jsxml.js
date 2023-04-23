import React from "react";
import ReactDOM from "react-dom/client";
// jsx (javaScript Xml) allows to write html in react

//using jsx
let element = <h1> I am using JSXML here</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
// ReactDOM.render(element, document.getElementById("root"));

//without jsx
let anotherElement = React.createElement(" hi!", {}, "I ma not using JSX here");
let r = ReactDOM.createRoot(document.getElementById("root"));
r.render(anotherElement);

//with JSX, we can write expressions inside the {}
const expressions = <h1> React is {5 + 5} times way better with JSX</h1>;
let r2 = ReactDOM.createRoot(document.getElementById("root"));
r2.render(expressions);
