import React from 'react';
import NavBar from "@/components/NavBar";
import AppRoutes from "@/router/AppRoutes";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}
