import React from "react";
import "./App.css";
import MainScreen from "./pages/mainScreen/MainScreen";
import FormStepOne from "./pages/formStepOne/FormStepOne";
import FormStepTwo from "./pages/formStepTwo/FormStepTwo";
// import Checkbox from "./components/checkbox/Checkbox";
import Radio from "./components/radio/Radio";
import Button from "./components/button/Button";
import ButtonIcon from "./components/buttonIcon/ButtonIcon";

function App() {
  return (
    <div className="App">
      {/* <MainScreen /> */}
      {/* <FormStepOne /> */}
      {/* <FormStepTwo /> */}
      <ButtonIcon picURL="delete-icon.svg" alt="delete-button-icon" />
      <Button text="Далее" />

    </div>
  );
}

export default App;
