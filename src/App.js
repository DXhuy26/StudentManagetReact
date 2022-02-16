import { Navigate, Route, Routes, Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListStudent from './components/ListStudent';
import InsertStudent from './components/InsertStudent';

function App() {
  return (
    <div>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListStudent />} /> 
            <Route path="/ListStudent" element={<ListStudent />} />
            <Route path="/insert-student" element={<InsertStudent />} />
            <Route path="/edit-student/:id" element={<InsertStudent />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
