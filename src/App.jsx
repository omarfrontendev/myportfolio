import Contact from "./Components/contact/Contact";
import Experiance from "./Components/experiance/Experiance";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Portfolio from "./Components/portfolio/Portfolio";

const App = () => {
  return(
    <>
      <Header/>
      <Nav/>
      <Experiance/>
      <Portfolio/>
      <Contact/>
    </>
  );
};

export default App;