import React from "react";
import "./App.css";
import MainScreen from "./pages/mainScreen/MainScreen";
import FormStepOne from "./pages/formStepOne/FormStepOne";
import FormStepTwo from "./pages/formStepTwo/FormStepTwo";
import FormStepThree from "./pages/formStepThree/FormStepThree";

function App() {
  return (
    <div className="App">
      {/* <MainScreen /> */}
      {/* <FormStepOne /> */}
      {/* <FormStepTwo /> */}
      <FormStepThree />
    </div>
  );
}

export default App;
