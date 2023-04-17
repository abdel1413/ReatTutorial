import React from "react";
import ReactDOM from "react-dom/client";
const mytable = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Smith</td>
    </tr>
  </table>
);

ReactDOM.render(mytable, document.getElementById("root"));
