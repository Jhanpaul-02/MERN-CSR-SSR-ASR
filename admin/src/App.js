import "./App.css";
import CreateTitle from "./components/create-Title";
import RenderList from "./components/list-of-Title";

function App() {
  return (
    <div className="App">
      <h1>ADMIN</h1>
      <CreateTitle />
      <RenderList />
    </div>
  );
}

export default App;
