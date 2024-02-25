import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./components/projects/projects.css";
import IntroMessage from "./components/intromessage/IntroMessage";

function App() {
  return (
    <div className="App">
      <Header />
      <ParallaxProvider>
        <Parallax speed={-30}>
          <Banner />
        </Parallax>
        <Parallax>
          <IntroMessage />
        </Parallax>
        <Parallax translateY={[0, -100]} speed={0}>
          <Projects />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default App;
