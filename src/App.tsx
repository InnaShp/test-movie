import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import Router from "./routes/router";

export default function App() {
  return (
    <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
    </BrowserRouter>
  );
}