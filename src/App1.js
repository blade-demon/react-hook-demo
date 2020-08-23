import React from "react";
import FunctionalComponent from "./FunctionalComponent/FunctionalComponent";
import { ThemeContext, LocaleContext } from "./Context";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="yellow">
          <LocaleContext.Provider value="en">
          <FunctionalComponent />
          </LocaleContext.Provider>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
