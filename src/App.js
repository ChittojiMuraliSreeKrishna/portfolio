import "@fontsource/roboto"
import Header from "./Components/Js/Header";
import {ThemeProvider, createMuiTheme, Container} from "@material-ui/core/"

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#282828",
    },
    secondary: {
      main: "#458588",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{marginTop: "4rem"}}>
      <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
