import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import store from "./store";
import { lightTheme, darkTheme } from "./theme";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
