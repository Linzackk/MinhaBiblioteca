import { Search } from "./pages/Search";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  return (
      <div>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>      
      </div>
  )
}

export default App
