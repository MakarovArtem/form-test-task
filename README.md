# This is a multuple step form app
Link to deployed app: https://makarovartem.github.io/multiple-step-form/

## Description
The app has two pages: 'Main' goes for collecting basic user data and 'Create' for more detailed info. After submitting data on 'Main' by clicking on button 'Start' rout changes to '/Create'. 
That page consists of three form tabs. All inputs are validated before going to next tab. Input values are saved between tabs changing in Redux store.
After all required inputs are filled and button 'Submit' on last, third tab are clicked, collected data are being tranfromed and sent to a server.
When the response from server are got the modal windown with results appear.

## Stack
React-router, React-pattern-format, React-hook-form and Yup, Redux-toolkit, TypeScript, CSS modules

## Project installation
If you want to install the app on your computer, do next steps:

1. Open an empty folder in your IDA
2. Clone Git repository. Type in console 'git clone https://github.com/MakarovArtem/multiple-step-form'
3. Install all dependencies. Type in console 'npm install'
4. Run dev mode. Type in console 'npm start'