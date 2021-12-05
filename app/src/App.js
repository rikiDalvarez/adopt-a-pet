import SearchParams from './components/SearchParams';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom"
import Details from "./components/Details"

function App() {
  return (
    <>
      <Router>
        <Link to="/"><h1 className="title">Adopt Me 🐶</h1> </Link>
        <Routes>  
          <Route path="/" element={<SearchParams />}>
          </Route>
          <Route path="/Details/:id" element={<Details />}>
          </Route>
        </Routes>
      </Router>

      {/* <Details /> */}
  
    </>
  );
}

export default App;
