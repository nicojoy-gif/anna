import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import BirthdayPage from './components/home';
import ReasonsILoveYou from './components/Reason';
import HowWeMet from './components/Howwemet';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayPage />} />
        <Route path="/reasons" element={<ReasonsILoveYou />} />
        <Route path="/how-we-met" element={<HowWeMet />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
