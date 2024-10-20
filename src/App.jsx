// src/App.jsx
import { Routes, Route } from "react-router-dom";
import DocsDashboard from "./components/DocsDashboard";
import Login from "./components/Login";
import SignUp from "./components/Signup"; // Import the Signup component

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8">Dokumintoor by 1Kloc</h1>
      <Routes>
        <Route path="/" element={<DocsDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Signup Route */}
        <Route path="*" element={<h2>Page Not Found</h2>} /> {/* 404 route */}
      </Routes>
    </div>
  );
}

export default App;
