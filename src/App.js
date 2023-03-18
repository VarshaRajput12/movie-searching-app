import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
