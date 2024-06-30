import Router from "./router";

function App() {
  return (
    <>
      <main className="bg-slate-100">
        <Router />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            asdasd
          </a>
          <a href="https://react.dev" target="_blank">
            asdasd
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button>count is</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  );
}

export default App;
