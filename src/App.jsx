import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Plotwist from './pages/Plotwist';
import VisionBoardAI from './pages/VisionBoardAI';
import Layout from './components/Layout/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/plotwist" element={<Plotwist />} />
                    <Route path="/visionboardai" element={<VisionBoardAI />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
