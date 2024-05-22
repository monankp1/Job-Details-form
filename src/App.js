import './App.css';
import JobDetails from './components/JobDetails';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/job-details'
          element={
            <JobDetails />
          }
        />

      </Routes>
    </Router>

  );
}

export default App;
