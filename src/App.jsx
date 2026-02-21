import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Home />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
