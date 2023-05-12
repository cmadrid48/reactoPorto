import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Carlos Madrid</h1>
      <div className="card">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
