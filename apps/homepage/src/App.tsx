import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      </header>
    </div>
  );
}

export default App;
