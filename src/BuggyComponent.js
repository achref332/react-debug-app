import React, { useState } from "react";

function BuggyComponent() {
  const [items] = useState(["Apple", "Banana"]);

  return (
    <div className="buggy">
      <h3>Fruits List</h3>
      <ul>
        {items.map((item) => (
          // Correction : ajout de key
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuggyComponent;
