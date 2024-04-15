import "./App.css";
import { Table } from "./components/Table";
import { data, graphData } from "./data";

function App() {
  return <Table rows={data} graphData={graphData} />;
}

export default App;
