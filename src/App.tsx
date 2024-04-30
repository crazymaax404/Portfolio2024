import { lightTheme, darkTheme, theme } from "shared/design/theme";

import { Portfolio } from "page/Portfolio";
import { GlobalStyles } from "shared/design/globalStyles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ITheme } from "shared/design/theme.interfaces";

function App() {
  const [theme, setTheme] = useState<ITheme>(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Portfolio />

      <button onClick={toggleTheme}>
        {theme.title === "dark" ? (
          <span aria-label="Light mode" role="img">
            🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌜
          </span>
        )}
      </button>
    </ThemeProvider>
  );
}

export default App;
