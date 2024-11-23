import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home/*" element={
            <Home />
          } />
      </Routes>
    </Router>
  );
};

export default App;
