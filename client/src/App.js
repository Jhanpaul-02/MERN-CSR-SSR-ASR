import "./App.css";
import axios from "axios";
import ListOfTitle from "./components/List_of_data";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <h1>CLIENT</h1>
      <ListOfTitle />
    </div>
  );
}

export default App;
