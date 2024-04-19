
import './App.css';  /* IMPORTING THE CSS This line imports the CSS styles defined in the App.css file. 
This allows you to style the HTML elements rendered by the React component.*/
import Mensaje from './Mensaje.js';    // Importando desde el modulo Mensaje

const App = () => {  /* This line defines a React component called App. The component is defined using a function that returns JSX code. 
The arrow function syntax (=>) is used to define a stateless component. */ 
  
  const a = 4   // Declaring variables
  const b = 6
 // Returning JSX
  return (         
  /* This code block defines the JSX that will be rendered by the App component. 
  - The className attribute on the outer div sets the CSS class App for this element, 
  allowing you to style it using the App.css file.
- The h1 and strong elements display the text "A-prendiendo react" and "Es un framework de Javascript", respectively.
- The inner div contains a p element that displays the text "El resultado es:" followed by the expression {a + b}. 
- The curly braces {} are used to embed JavaScript expressions within JSX. 
- The expression {a + b} evaluates to the sum of the variables a and b, which is 10.
*/
    <div className = "App">
   <h1>A-prendiendo react</h1>
   <strong>Es un framework de Javascript</strong>
   <div>
    <Mensaje color='red' message='estamos haciendo'/>
    <Mensaje color='blue' message='una app con react'/>
    <p>El resultado es:</p>
    {a + b}
   </div>
           
    </div>
  )
}    // las llaves evaluan el contenido dentro del <div>

export default App;  // Exporting the component
/* This line exports the App component as the default export of the module. 
This allows you to import and use the component in other modules. */



// WAYS TO CREATE FUNCTIONS IN REACT

/* 1. First way:

function calculateArea(width, height) {
  return width * height;
}

function MyComponent() {
  const area = calculateArea(10, 5); // Call the function from inside the component

  return (
    <div>
      The area is: {area}
    </div>
  );
}

export default MyComponent; */

/* 2. Second way: 

function handleClick() {
  alert('Button clicked!');
}

function MyComponent2() {
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default MyComponent2; */

/* 
3. Third way:
const App = () => {
  return (
    <div className = "App">
    Hola Moundo
    </div>
  )
}
export default  App;

*/

/* Short method for make functions 
const App = () => (
  <div className='App'>
  hello world
  </div>
)
export default App;

*/



