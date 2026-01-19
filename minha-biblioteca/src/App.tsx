import { Search } from "./pages/Search";
import { Home } from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/search">Procurar</Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </nav>
      </div>
  )
}

export default App
