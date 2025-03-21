import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import '@aws-amplify/ui-react/styles.css';
import App from "./App.tsx";



Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
