import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Home from "./pages/Home";
function App() {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div className="App">
        <Home />
      </div>
    </ParallaxProvider>
  );
}

export default App;
