import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
//import ThemeProvider from "react-bootstrap/ThemeProvider";
function App() {
  return (
    // <ThemeProvider
    //   breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    //   minBreakpoint="xxs"
    // >
    <>
      <SideBar />
      <Main />
    </>
    // </ThemeProvider>
  );
}

export default App;
/*
@media only screen and(max-width: 600px){}
@media only screen and(min-width: 601px) and (max-width: 1024px){}
@media only screen and (min-width: 1025px)
*/
