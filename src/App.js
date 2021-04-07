import "./App.css";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ProductList from "./component/ProductList";


function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
