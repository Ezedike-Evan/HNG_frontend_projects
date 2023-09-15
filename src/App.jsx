import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home'
import IndividualMovie from './component/individualMovie';

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<IndividualMovie />} />
      </Routes>
    </Router>
  )
}

export default App
