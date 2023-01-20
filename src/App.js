import "./App.css";
import Form from "./Form";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container mt-5 app-container">
        <Form />
        <Weather/>
      </div>
      <footer className="text-center">
        This project was coded by Elnaz Haghparast and is open-sourced on{" "}
        <a href="https://github.com/e-haghparast">GitHub</a>
      </footer>
    </div>
  );
}
