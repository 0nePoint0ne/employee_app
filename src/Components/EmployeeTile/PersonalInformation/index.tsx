const PersonalInformation = ({display}: {display:boolean}) => {
    return (
      <div
      style={{
        display: display ? "block" : "none",
        marginTop: "12px",
        padding: "12px",
        border: "1px solid black",
        textAlign: "left",
        borderRadius: "10px"
      }}
      >
        <h4>Personal Information</h4>
  
        <div className="data-row">Birthday:</div>
        <div className="data-row">Country:</div>
        <div className="data-row">Province/State:</div>
        <div className="data-row">City:</div>
        <div className="data-row">Address:</div>
        <div className="data-row">City:</div>
        <div className="data-row">Postal Code:</div>
        <div className="data-row">Contact Number:</div>
      </div>
    );
  };

  export default PersonalInformation;