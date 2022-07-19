
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Rules from './pages/rules/Rules';

function App() {

  return(
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/quiz/:quizId' element={<Rules/>} />
      </Routes>
    </>
  )
}

export default App;
