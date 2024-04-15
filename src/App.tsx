import { Table } from "./components/Table";
import { data, graphData } from "./data";
import css from "./App.module.scss";

function App() {
  return (
    <div className={css.app}>
      <Table rows={data} graphData={graphData} />
    </div>
  );
}

export default App;
