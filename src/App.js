import "./App.css";
import Checkout from "./components/Checkout";
import { UiTriggersProvider } from "./components/context/UiTriggerContext";

function App() {
  return (
    <div className="App">
      <UiTriggersProvider>
        <Checkout />
      </UiTriggersProvider>
    </div>
  );
}

export default App;
