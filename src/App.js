import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="section1" id="section1">
        <p className="head">Ber3</p>
        <menu className="menu">
          <li>
            <a href="#section1">Home</a>
          </li>
          <li>
            <a href="#section2">Contact</a>
          </li>
          <li>
            <a href="#section3">About</a>
          </li>
        </menu>
      </section>
      <section className="section2" id="section2"></section>

      <section className="section3" id="section3"></section>
    </div>
  );
}

export default App;
