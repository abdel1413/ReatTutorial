import React from "react";
import ReactDOM from "react-dom/client";

let firstElement = <h1>Hello world!!!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(firstElement);

//in react map() can be used to generate elements from an array as a list
let myArray = ["one1", "two1", "three1"];
let ar = myArray.map((item) => <p>{item}</p>);
root.render(ar);

// using JSX
let element = <h1> I am using JSXML here</h1>;
//const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

//with JSX, we can write expressions inside the {}
const expressions = <h1> React is {5 + 5} times way better with JSX</h1>;
let r2 = ReactDOM.createRoot(document.getElementById("root"));
r2.render(expressions);

// if we you want to write may jsx, use parentheses () to surrounder them
let list = (
  <ul>
    <li>list1</li>,<li>list2</li>,<li>list3</li>
  </ul>
);

r2.render(list);

//if we want to write may jsx not only we do it inside the ()
//but we have to them inside one tope parent element like div or
//  use fragment <></>
let parag = (
  // <div>
  <>
    <p> thisis paragraph </p>
    <p>this is paragraph too</p>
  </>
  // </div>
);
r2.render(parag);

//NOTE: if statement is not allow in JSX,
//to solve this issue, write the if statement outside
//then pass it within {} surrounded by Jsx
let x = 5;
let mesg = "Googbye";
if (x < 10) {
  mesg = "Hello";
}

let answer = <h1>{mesg}</h1>;
let r3 = ReactDOM.createRoot(document.getElementById("root"));
r3.render(answer);

//we can alternatively use tanery operator since this is accepted
//in JSx
let ans = <h1>{x < 10 ? "helloooo" : "goodbye"}</h1>;
r3.render(ans);
