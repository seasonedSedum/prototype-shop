import Header from "./components/Header";
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
