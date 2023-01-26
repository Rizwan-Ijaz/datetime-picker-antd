import "./styles.css";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

export default function App() {
  return (
    <div className="App">
      <h1>DateTime Picker</h1>

      <DatePicker
        format="DD/MM/YYYY hh:mm A"
        onChange={() => {}}
        showTime={{ use12Hours: true }}
      />
    </div>
  );
}
