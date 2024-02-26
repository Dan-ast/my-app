import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stuttgart" />
      </div>
    </div>
  );
}
