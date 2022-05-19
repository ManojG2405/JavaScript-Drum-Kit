//Selecting element by Id
// document.getElementById('1st').innerHTML = "Hello";

//Selecting elements by Class
// let elm = document.getElementsByClassName('cl');

// for(let i = 0; i < elm.length; i++){
//     elm[i].innerHTML = "Hello";
// }

//Selecting elements by multiple Classes
// let elm = document.getElementsByClassName("cl pi");

// for (let i = 0; i < elm.length; i++) {
//   elm[i].innerHTML = "Hello";
// }

//Selecting elements by tags / Hierarchy
// let div1 = document.getElementById("div1");
// let elm = div1.getElementsByTagName("h1");

// for (let i = 0; i < elm.length; i++) {
//   elm[i].innerHTML = "Hello";
// }

//Query Selector

// let elm = document.querySelector("p.intro");
// elm.innerHTML = "Hello";
// for (let i = 0; i < elm.length; i++) {
//   elm[i].innerHTML = "Hello";
// }

//Query Selector All
// let elm = document.querySelectorAll("p.intro");

// for (let i = 0; i < elm.length; i++) {
//   elm[i].innerHTML = "Hello";
// }

// ****** Traversing elements in JavaScript *****
// let elm = document.getElementById("intro");
// let prt = elm.parentElement;
// // same as we can use firstChildElement, lastChildElement & children
// prt.innerHTML="Hello re Baba";
// console.log(prt);

//********** Selecting siblings ***********
// let elm = document.getElementById("intro");
// let sib = elm.previousElementSibling;
// // Same as we can use nextElementSibling
// console.log(sib);

//  *********** innerHTML Demo ************
// let elm = document.getElementById("intro").innerHTML = "<p>Content changed using JavaScript</p>";

// Append Element in HTML

// let elm = document.getElementById("intro") // Parent

// let h1 = document.createElement('h1');

// h1.className = "try bye";
// h1.id = "introId";
// // let text = document.createTextNode("This is h1 tag");
// // h1.appendChild(text)
// h1.textContent = "Added Content"

// elm.appendChild(h1);
// document.body.appendChild(h1);

// ****** insertBefore / after ***********
//  use inertBefore

// ########## Remove Child element ########

// let parent = document.getElementById("menu");
// let elm = parent.firstElementChild;
// parent.removeChild(elm);
// document.body.removeChild(menu);

// ************** Clone or copy element ************

// let menu = document.getElementById("menu");
// let cloneElm = menu.cloneNode(true); // use false to copy only parent element
// // console.log(cloneElm);
// cloneElm.id = "menu2"
// document.body.appendChild(cloneElm);

// ************** Replace element ***********

// let menu = document.getElementById("menu");
// let newItem = document.createElement("li");
// newItem.textContent = "List E";
// let replace = menu.firstElementChild.nextElementSibling;
// menu.replaceChild(newItem, replace);

// **************** Insert Adjacent HTML ************
// let adj = document.getElementById("power");
// let newELm = "<h1> New h1</h1>";
// adj.insertAdjacentHTML('afterend', newELm)
// Properties are beforebegin, afterbegin, beforeend, afterend.

// *********** Change attribute through Js ********
// let btn = document.getElementById("btn");
// btn.setAttribute("name", "form1");

// ****** remove Attribute ******
// btn.removeAttribute("name");

// ******* Check attribute is present or not*****
// console.log(btn.hasAttribute("name"));

// ***** Change inline style *****
// Method 1
// let btn = document.getElementById("btn");
//btn.style.cssText = "background-color: red; color: white; padding: 15px; border: 2px solid black; border-radius: 15px; font-size: 35px";

// // Method 2
//  let btn = document.getElementById("btn");
// btn.setAttribute("style", "background-color: red; color: white; padding: 15px; border: 2px solid black; border-radius: 15px; font-size: 35px" )

// Method 3
// let btn = document.getElementById("btn");
// btn.style.background = "red";

// ****** Check css applied on Element ****
let btn = document.getElementById("btn");
console.log(getComputedStyle(btn));