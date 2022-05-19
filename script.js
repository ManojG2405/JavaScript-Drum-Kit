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

let elm = document.getElementById("intro") // Parent

let h1 = document.createElement('h1');

h1.className = "try bye";
h1.id = "introId";
// let text = document.createTextNode("This is h1 tag");
// h1.appendChild(text)
h1.textContent = "Added Content"

// elm.appendChild(h1);
// document.body.appendChild(h1);


// ****** insertBefore ***********
