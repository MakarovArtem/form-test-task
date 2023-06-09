import React from "react";
import "./App.css";
import MainScreen from "./pages/mainScreen/MainScreen";
import FormStepOne from "./pages/formStepOne/FormStepOne";
import FormStepTwo from "./pages/formStepTwo/FormStepTwo";
// import Checkbox from "./components/checkbox/Checkbox";
import Radio from "./components/radio/Radio";

function App() {
  return (
    <div className="App">
      {/* <MainScreen /> */}
      {/* <FormStepOne /> */}
      {/* <FormStepTwo /> */}
      <Radio 
        title="Radio group"
        groupName="radio"
        variants={["1", "2", "3"]}
        optionsId={[
          "field-radio-group-option-1",
          "field-radio-group-option-2",
          "field-radio-group-option-3"
        ]}
        id="radio-group"
      />
    </div>
  );
}

export default App;
