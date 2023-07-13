import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Meetup } from "./Pages/Meetup/Meetup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetup/:meetupId" element={<Meetup />} />
      </Routes>
    </div>
  );
}

export default App;
