import { useState } from "react";

const EmployeeInformation = ({ display }: { display: boolean }) => {
  const [edit, setEdit] = useState({ postalCode: false });

  const [state, setState] = useState({ postalCode: "134 444" });

  return (
    <div
      style={{
        display: display ? "block" : "none",
        marginTop: "12px",
        padding: "12px",
        border: "1px solid black",
        textAlign: "left",
        borderRadius: "10px",
      }}
    >
      <h4>Employee Information</h4>

      <div className="data-row">Job Title:</div>
      <div className="data-row">Country:</div>
      <div className="data-row">Province/State:</div>
      <div className="data-row">City:</div>
      <div className="data-row">Address:</div>
      <div className="data-row">City:</div>
      <div className="data-row">
        <div>Postal Code:</div> 
        <div>  
          {edit.postalCode ? (
            <input
              type="text"
              onChange={(event) =>
                setState({ ...edit, postalCode: event.target.value })
              }
              onKeyPress={event => { //need simplification
                if (event.key === "Enter") {
                  setEdit({ ...edit, postalCode: !edit.postalCode})
                }
              }}
              value={state.postalCode}
            />
          ) : (
            <p
              onClick={() => setEdit({ ...edit, postalCode: !edit.postalCode })}
            >
              {state.postalCode}
            </p>
          )}
        </div>
      </div>
      <div className="data-row">Contact Number:</div>
      <div className="data-row">Email:</div>
    </div>
  );
};

export default EmployeeInformation;
