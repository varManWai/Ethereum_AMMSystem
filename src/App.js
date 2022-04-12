import { Route, Routes } from "react-router-dom";

import Uniswap from "./pages/Uniswap";
import Pools from "./pages/Pools";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Uniswap />}></Route>
        <Route path="/pools" element={<Pools />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
