import React, { createContext, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

const ThemeContext = React.createContext();

class TaskThemeProvider extends React.Component {
  state = {
    mode: "light",
  };

  toggle = () => {
    const mode = this.state.mode === "light" ? `dark` : `light`;
    this.setState({
      mode: mode,
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ toggle: this.toggle}}
      >
        <ThemeProvider theme={{ mode: this.state.mode }}>
          {this.props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
export default TaskThemeProvider;
export const Consumer = ThemeContext.Consumer;
