import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as Provv } from "./Components/Context/Localization";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Provv>
      <App />
    </Provv>
   </BrowserRouter>
  </React.StrictMode>
);
