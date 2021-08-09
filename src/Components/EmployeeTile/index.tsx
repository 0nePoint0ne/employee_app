import React, { Props, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import EmployeeInformation from "./EmployeeInformation";
// add later
export interface Employee {
  //employeeId: string;
  firstName: string;
  lastName: string;
  // personalInfo:{
  //   email: string
  // }
  // workInfo:
  // {
  //   jobPosition: string;
  //   department: string;
  //   email: string;
  // }
}

const EmployeeTile = (props: Employee) => {
  const {firstName, lastName} = props;

  const [selected, setSelected] = useState(false);

  return (
    <li>
      <div
        style={{
          border: "1px solid red",
          width: "800px",
          height: "fit-content",
          margin: "16px",
          padding: "12px",
          borderRadius: "21px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img height={180} width={180} src="test" />

            <h3>
              {firstName} {lastName}
            </h3>
            <div
              onClick={() => setSelected(!selected)}
              style={{ marginLeft: "auto" }}
            >
              x
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <EmployeeInformation display={selected} />
          <PersonalInformation display={selected} />
        </div>
      </div>
    </li>
  );
};

export default EmployeeTile;
