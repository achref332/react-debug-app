import React from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  return (
    <div className="app">
      <h1>React Debugging Example - Fixed</h1>
      
      <h2>Counter Component</h2>
      <Counter />

      <h2>User Card Component</h2>
      {/* Correction : ajout de la prop name */}
      <UserCard name="John Doe" age={25} />

      <h2>Buggy Component</h2>
      <BuggyComponent />
    </div>
  );
}

export default App;
