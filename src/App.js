import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
