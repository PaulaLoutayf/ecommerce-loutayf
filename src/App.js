import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar titulo="PhotoFrames" />
      <ItemListContainer item="Item de Test" />
    </div>
  );
}

export default App;
