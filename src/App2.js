import React, { Component } from "react";
import ClassComponent from "./ClassComponent/ClassComponent";
import { ThemeContext, LocaleContext } from "./Context";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value="red">
          <LocaleContext.Provider value="en">
            <ClassComponent />
          </LocaleContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
