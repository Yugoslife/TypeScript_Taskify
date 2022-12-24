import './App.css';

let name: string;
let age: number | string;
let isStudednt: boolean;
let hobbies: string[];
let role: [number, string];

// let printName:Function;
let printName: (name:string) => number;

// function printName(name:string){
//   console.log(name)
// }
// printName('Iaroslav')

// type Person = {
//   name: string;
//   age?: number;
// } 
// let person: Person = {
//   name: 'Iaroslav',
//   age: 21,
// }

// let lotsOfPeople: Person[]


function App() {
  return (
    <div className="App">
     Hello World
    </div>
  );
}

export default App;
