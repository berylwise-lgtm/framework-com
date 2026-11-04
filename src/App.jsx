import Hero from "./Components/Hero";
import Market from "./Components/Market";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container app-main py-4 py-md-5">
        <Hero />
        <Market />
      </main>
      <Footer />
    </>
  );
}

export default App;
