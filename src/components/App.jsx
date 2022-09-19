import React from "react";

function App() {
  //see declaring a use state hook where the value will be of type object
  let [fullName, setFullName] = React.useState({
    firstName: " ",
    lastName: " "
  });

  //the below function will be trggered if there will be any change detected in the input fields in the form
  function name(event) {
    let temp1 = event.target.name;
    let temp2 = event.target.value;
    //in the below line we are checking which input field has triggered the change if it is the firsname or it is the last name and depending up on that we are updating the hook state i.e. fullName
    if (temp1 === "fName") {
      setFullName(function (previousValue) {
        //now the above call back function i.e setFullName is itself a hook state function which is used to update the value of the use state variable i.e. fullName now since we are passing a function within it so here the function will become the call back function and the function passed as the parameter will be executed at last once the parent function body is executed but since the parent function body does not has anything so the call back function will get executed and the previousValue passed in it basically holds the initial state of the usestate hook and this is the logic and now we will update the inpute field which is changed and use the older value for the other field thus once we enterd the firstname and again when we will enter the lastname then there will be nothing in firstname and if we dont use this logic then firstname will not have anything and it will be deleted therefore we use this previous state concept because react holds the value of previous state of a variable.
        return {
          firstName: temp2,
          lastName: previousValue.lastName
        };
      });
    } else if (temp1 === "lName") {
      setFullName(function (previousValue) {
        return {
          firstName: previousValue.firstName,
          lastName: temp2
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={name}
          name="fName"
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          onChange={name}
          name="lName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
