import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5 app-container">
        <Weather defaultCity="New York"/>
      </div>
      <footer className="text-center">
        This project was coded by Elnaz Haghparast and is open-sourced on{" "}
        <a href="https://github.com/e-haghparast" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
}
