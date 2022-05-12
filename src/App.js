import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">Hello React</h2>
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={} />
        <Route path="about" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
