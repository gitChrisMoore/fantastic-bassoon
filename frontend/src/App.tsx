import Router from "./router";
import Header from "./views/header/TopNavBar";

function App() {
  return (
    <>
      <Header />

      <main className="h-full flex justify-center">
        <div className="max-w-md w-full mx-4 flex-grow overflow-y-auto p-4">
          <Router />
        </div>
      </main>
    </>
  );
}

export default App;
