import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./index.css";
// setup vars
import {books} from "./Books";
import Book  from "./Book";
import {greeting} from "./testing/testing";
function BookList() {
  console.log("************ greeting : " ,greeting);
  return (
    <>
      <section className="booklist">{books.map((book , idx)=>{
        // console.log(book);
        return (
          <Book {...book} key={book.id}></Book>
        );
      })}</section>
    </>
  );
}


// const Greeting = () => {
//   return React.createElement(
//     "h1",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BookList />
  </React.StrictMode>,
  document.getElementById("root")
);
