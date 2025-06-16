import "./App.css";
import CreateTitle from "./components/create-Title";
import RenderList from "./components/list-of-Title";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
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
