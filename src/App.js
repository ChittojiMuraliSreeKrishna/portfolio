import "@fontsource/roboto"
import Body from "./Components/Js/Body";
import Footer from "./Components/Js/Footer";
import Header from "./Components/Js/Header";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import { green, red } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: green[600]
    },
    secondary: {
      main: red[400]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
     <Body />
     <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
