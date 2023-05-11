import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Work from "./components/Work";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Tools />
            <Work />
            <Contact />
        </div>
    );
}

export default App;
