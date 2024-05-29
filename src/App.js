import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import MusicList from "./Components/MusicList";
import MusicUpload from "./Components/MusicUpload";
import Navbar from "./Components/Navbaar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          {/* <Route exact path="/"  element={<Home/>} /> */}
          
          {/* <Route exact path="/contact" element={<Contact/>} /> */}
          {/* <Route exact path="/event" element={<Event/>} /> */}
          {/* <Route exact path="/getAllUser" element={<UserTable/>} />
          <Route exact path="/book" element={<BookingForm/>} /> */}
          <Route exact path="/" element={<MusicUpload/>} />
          <Route exact path="/musicList" element={<MusicList/>} />
          
          </Routes>
          </div>
          <Footer/>
    </Router>
  );
}

export default App;
