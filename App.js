// import About from "./Aboutme/Aboutme"
// import Obj from "./Objectives/Objectives"
// import './App.css'
// import Invent from "./Inventory/Inventory"
import Counter from "./CounterComp/CounterComp"

function App() {
  return (
     
     
      <div>
      <Counter startingCount={0}  countRate={3}/>
      <Counter startingCount={4}  countRate={1}/>
      <Counter startingCount={2}  countRate={2}/>
      <Counter startingCount={1}  countRate={4}/>
      </div>
      
  );
}

export default App;
