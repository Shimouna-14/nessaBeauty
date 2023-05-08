import Footer from "./Footer";
import Header from "./Header";
import Home from "../pages/Home";
import MentionLegale from "../pages/MentionLegale";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
          <Header />
          <Routes>
            <Route exact path="/nessabeauty" element={<Home />} />
            <Route path="/nessabeauty/mention-legale" element={<MentionLegale />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;