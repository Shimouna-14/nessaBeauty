import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MentionLegale from "./pages/MentionLegale";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mention-legale" element={<MentionLegale />}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;