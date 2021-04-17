// Import stylesheets
import "./style.css";
import { Subject } from "./subject.js";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let subject = new Subject();

function Observer1() {
  console.log("Hi from Observable 1");
}

function Observer2() {
  console.log("Hi from Observable 2");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.notifyAll();

subject.unsubscribe(Observer2);
subject.notifyAll();
