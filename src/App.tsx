import React from "react";
import MainScreen from "./pages/mainScreen/MainScreen";
import FormStepOne from "./pages/formStepOne/FormStepOne";
import FormStepTwo from "./pages/formStepTwo/FormStepTwo";
import FormStepThree from "./pages/formStepThree/FormStepThree";
import ModalWindow from "./components/modalWindow/ModalWindow";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <MainScreen /> */}
      <FormStepOne />
      {/* <FormStepTwo /> */}
      {/* <FormStepThree /> */}
      {/* <ModalWindow isSuccessfull={true} /> */}
    </div>
  );
}

export default App;