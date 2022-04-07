// import logo from "./logo.svg";
import "./App.css";
import Cata from "./components/Cata";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Cata />
      <Trending />
    </div>
  );
}

export default App;
