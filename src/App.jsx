import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/theme";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Project />
      <About />
    </ThemeProvider>
  );
}

export default App;
