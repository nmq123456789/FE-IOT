import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element= {<Home></Home>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;