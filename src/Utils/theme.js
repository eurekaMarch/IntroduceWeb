import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    black: {
      main: grey[900],
      dark: grey[900],
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.6rem",
  },
});

export default theme;
