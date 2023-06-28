import "./App.css";

function App() {
  return (
    <div className="App flex-col">
      <header className="Navbar">
        <a href="/">Logo</a>

        <nav>
          <ul>
            <li>
              <a href="#top">Top</a>
            </li>
            <li>
              <a href="#mid">Mid</a>
            </li>
            <li>
              <a href="#bot">Bottom</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="banner">
        <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      </section>

      <main className="Main flex-col"></main>

      <footer className="Footer flex-col">
        <h2>&copy; Lars Gunnar</h2>
      </footer>
    </div>
  );
}

export default App;
