import React from "react";
import "./App.css";
import MainScreen from "./pages/mainScreen/MainScreen";
import FormStepOne from "./pages/formStepOne/FormStepOne";
import FormStepTwo from "./pages/formStepTwo/FormStepTwo";
import Checkbox from "./components/checkbox/Checkbox";

function App() {
  return (
    <div className="App">
      {/* <MainScreen /> */}
      {/* <FormStepOne /> */}
      {/* <FormStepTwo /> */}
      <Checkbox 
        title="Checkbox group"
        variants={["1", "2", "3"]}
        optionsId={[
          "field-checkbox-group-option-1",
          "field-checkbox-group-option-2",
          "field-checkbox-group-option-3"
        ]}
        id="checkbox-group"
      />
    </div>
  );
}

export default App;
