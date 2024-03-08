import Header from "./layout/Header";
import "./App.css";
import Footer from "./layout/Footer";
import NewsProvider from "./context/newsContext";

function App() {

  return (
    <NewsProvider>
      <main>
        <Header></Header>
        <Footer></Footer>
      </main>
    </NewsProvider>
  );
}

export default App;
