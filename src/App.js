import "./App.css";
import Homepage from "./AllPage/Homepage/HomePage.js";
import Subpage from "./AllPage/Subpage/Subpage.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        {/* <Link to="">HomePage</Link>
        <Link to="/Subpage">Subpage</Link>        */}
     
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Subpage" element={<Subpage />} />

        </Routes>
     
      </Router>

     
    </>
  );
}

export default App;
