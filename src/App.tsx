import React from "react";
import "./App.css";

import EmployeeTile ,{ Employee } from "./Components/EmployeeTile"

function App() {
  const employees = [
    { firstName: "Gregory", lastName: "Krynski" },
    { firstName: "John", lastName: "Krynski" },
    { firstName: "Thomas", lastName: "Krynski" },
  ];

  return (
    <div className="App">
      <div>
        <ul>
          {employees.map((employee: Employee) => 
             <EmployeeTile firstName={employee.firstName} lastName={employee.lastName} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
