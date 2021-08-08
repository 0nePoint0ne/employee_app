import React from "react";
import logo from "./logo.svg";
import "./App.css";

const EmployeeTitle = ({ employee }: any) => {
  const { firstName, lastName } = employee;

  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid red",
          width: "600px",
          margin: "12px",
          padding: "12px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img height={100} width={100} src="test" />

          <h3>
            {firstName} {lastName}
          </h3>
        </div>
        <div style={{ marginLeft: "auto" }}>x</div>
      </div>
    </li>
  );
};

function App() {
  const employees = [
    { firstName: "Gregory", lastName: "Krynski" },
    { firstName: "John", lastName: "Krynski" },
    { firstName: "Thomas", lastName: "Krynski" },
  ];

  return (
    <div>
      <div>
        <ul>
          {employees.map((employee: any) => {
            return <EmployeeTitle employee={employee} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
