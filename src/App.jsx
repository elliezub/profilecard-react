import "./App.css";
import Intro from "./components/Intro";
import Buttons from "./components/buttons";
import Text from "./components/Text";

function App() {
  return (
    <>
      <div className="container">
        <Intro />
        <Buttons />
        <Text />
      </div>
    </>
  );
}

export default App;
