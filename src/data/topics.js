const topics = [
  {
    id: 1,
    icon: "📘",
    title: "JavaScript Variables",
    description: "Learn about var, let and const.",
    content: `
Variables are containers used to store data.

JavaScript provides three ways to declare variables:

• var
• let
• const

Example:

let name = "Akash";
const age = 22;

Use const whenever possible.
Use let when values change.
Avoid var in modern JavaScript.
`,
  },

  {
    id: 2,
    icon: "⚡",
    title: "Functions",
    description: "Learn different types of functions.",
    content: `
Functions are reusable blocks of code.

Types:

1. Function Declaration

function greet(){
   console.log("Hello");
}

2. Function Expression

const greet = function(){}

3. Arrow Function

const greet = ()=>{}

Functions improve code reusability.
`,
  },

  {
    id: 3,
    icon: "🔁",
    title: "Loops",
    description: "Master loops in JavaScript.",
    content: `
Loops execute code repeatedly.

Types:

• for
• while
• do...while
• for...of
• forEach()

Example:

for(let i=0;i<5;i++){
 console.log(i)
}
`,
  },

  {
    id: 4,
    icon: "📦",
    title: "Arrays",
    description: "Learn important array methods.",
    content: `
Arrays store multiple values.

Important methods:

map()
filter()
find()
reduce()
some()
every()
includes()

Arrays are one of the most important concepts in JavaScript.
`,
  },

  {
    id: 5,
    icon: "🎯",
    title: "Objects",
    description: "Learn Objects in JavaScript.",
    content: `
Objects store data in key-value pairs.

Example:

const student={
 name:"Akash",
 age:22
}

Access:

student.name

Objects are used everywhere in JavaScript.
`,
  },

  {
    id: 6,
    icon: "🚀",
    title: "Promises",
    description: "Understand asynchronous JavaScript.",
    content: `
Promises handle asynchronous operations.

States:

Pending

Fulfilled

Rejected

Example:

fetch(url)
.then(res=>res.json())
.catch(err=>console.log(err))

Promises avoid callback hell.
`,
  },

  {
    id: 7,
    icon: "⚛️",
    title: "React Basics",
    description: "Introduction to React.",
    content: `
React is a JavaScript Library.

Concepts:

JSX

Components

Props

State

Virtual DOM

React allows building reusable UI components.
`,
  },

  {
    id: 8,
    icon: "💻",
    title: "useState Hook",
    description: "Manage state using Hooks.",
    content: `
useState allows React components to store data.

Example:

const [count,setCount]=useState(0)

Updating:

setCount(count+1)

Whenever state changes,
React re-renders the component.
`,
  },
];

export default topics;