import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./Router";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
