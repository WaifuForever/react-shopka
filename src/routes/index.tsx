import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Paths = () => {
    return (
        <div className="routes_container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Paths;
